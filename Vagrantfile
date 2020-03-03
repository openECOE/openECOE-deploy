require 'getoptlong'
# -*- mode: ruby -*-
# vi: set ft=ruby :

opts = GetoptLong.new(
  [ '--domain', GetoptLong::OPTIONAL_ARGUMENT ],
  [ '--branch', GetoptLong::OPTIONAL_ARGUMENT ],
  [ '--ansible_limit', GetoptLong::OPTIONAL_ARGUMENT ]
)

opts.ordering=(GetoptLong::REQUIRE_ORDER)   ### this line.

opts.each do |opt, arg|
  case opt
    when '--domain'
      DOMAIN=arg

    when '--branch'
      GIT_BRANCH=arg

    when '--ansible_limit'
      ANSIBLE_LIMIT=arg
  end
end

unless defined? DOMAIN
    DOMAIN = 'openecoe.es'
end

unless defined? GIT_BRANCH
    GIT_BRANCH = 'master'
end

unless defined? ANSIBLE_LIMIT
    ANSIBLE_LIMIT = "all"
end



Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"
  config.vm.hostname = DOMAIN

  #config.vm.network "public_network"
  config.vm.synced_folder "./ansible", "/tmp/deploy", mount_options: ["dmode=775,fmode=664"]
  config.vm.synced_folder ".", "/vagrant", disabled: true

  config.vm.provision "ansible_local" do |ansible|
    ansible.limit = ANSIBLE_LIMIT
    ansible.inventory_path = "inventory/production"
    ansible.provisioning_path = "/tmp/deploy"
    ansible.playbook = "setup.yml"
    ansible.extra_vars = { domain: DOMAIN, git_branch: GIT_BRANCH, ansible_python_interpreter:"/usr/bin/python3"}
  end

  config.vm.define "full", primary: true do |prod|
    prod.vm.network "private_network", ip: "192.168.11.40"
    prod.vm.network "forwarded_port", guest: 22, host: 2240
  end

  config.vm.define "test", autostart: false do |test|
    test.vm.network "private_network", ip: "192.168.11.50"
    test.vm.network "forwarded_port", guest: 22, host: 2250

    test.ssh.port = 2250
    test.ssh.guest_port = 22

    test.vm.provision "ansible_local" do |ansible|
      ansible.verbose = "vvv"
      ansible.limit = ANSIBLE_LIMIT
      ansible.inventory_path = "inventory/test"
      ansible.provisioning_path = "/tmp/deploy"
	    ansible.playbook = "setup.yml"
	    ansible.extra_vars = { domain: DOMAIN, git_branch: GIT_BRANCH, ansible_python_interpreter:"/usr/bin/python3"}
    end

    test.vm.provider "virtualbox" do |v|
	    v.name = "TEST_"+DOMAIN+"_"+GIT_BRANCH+"_"+ANSIBLE_LIMIT
	    v.memory = 4096
	    v.cpus = 2
	  end
  end

  config.vm.provider "virtualbox" do |v|
    v.name = DOMAIN+"_"+GIT_BRANCH+"_"+ANSIBLE_LIMIT
    v.memory = 4096
    v.cpus = 2
  end
end
