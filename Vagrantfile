# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/bionic64"

  config.vm.network "public_network"
  config.vm.synced_folder "./ansible", "/tmp/deploy", mount_options: ["dmode=775,fmode=664"]

  config.vm.synced_folder ".", "/vagrant", disabled: true

  config.vm.provision.provisioning_path = "/tmp/deploy"
  config.vm.provision.vault_password_file  = "ansible_vault.pass"
  config.vm.provision.galaxy_role_file = "requeriments.yml"
  config.vm.provision.playbook = "setup.yml"
  config.vm.provision.verbose =


  config.vm.define "full" do |prod|
    prod.vm.network "private_network", ip: "192.168.11.40"
    prod.vm.network "forwarded_port", guest: 22, host: 2252

    #prod.ssh.port = 2232
    #prod.ssh.guest_port = 2252

    prod.vm.hostname = "openecoe"

    prod.vm.provision "ansible_local" do |ansible|
      #ansible.verbose = "v"
      ansible.limit = "production"
      ansible.provisioning_path = "/tmp/deploy"
      ansible.vault_password_file  = "ansible_vault.pass"
      #ansible.galaxy_role_file = "requeriments.yml"
      ansible.playbook = "setup.yml"
      ansible.inventory_path = "inventory/production"
    end
  end

  config.vm.define "test", autostart: false do |prod|
    prod.vm.network "private_network", ip: "192.168.11.50"
    prod.vm.network "forwarded_port", guest: 22, host: 2252

    #prod.ssh.port = 2232
    #prod.ssh.guest_port = 2252

    prod.vm.hostname = "openecoe"

    prod.vm.provision "ansible_local" do |ansible|
      #ansible.verbose = "v"
      ansible.limit = "test"
      ansible.provisioning_path = "/tmp/deploy"
      ansible.vault_password_file  = "ansible_vault.pass"
      #ansible.galaxy_role_file = "requeriments.yml"
      ansible.playbook = "setup.yml"
      ansible.inventory_path = "inventory/test"
    end
  end

  config.vm.define "api", autostart: false do |prod|
    prod.vm.network "private_network", ip: "192.168.11.41"
    prod.vm.network "forwarded_port", guest: 2252, host: 1141

    #prod.ssh.port = 1141
    #prod.ssh.guest_port = 2252

    prod.vm.hostname = "openecoe-api"

    prod.vm.provision "ansible_local" do |ansible|
      #ansible.verbose = "v"
      ansible.limit = "api"
      ansible.provisioning_path = "/tmp/deploy"
      ansible.vault_password_file  = "ansible_vault.pass"
      #ansible.galaxy_role_file = "requeriments.yml"
      ansible.playbook = "setup.yml"
      ansible.inventory_path = "inventory/production"
    end
  end

  config.vm.define "webui", autostart: false do |prod|
    prod.vm.network "private_network", ip: "192.168.11.42"
    prod.vm.network "forwarded_port", guest: 2252, host: 1142

    #prod.ssh.port = 1142
    #prod.ssh.guest_port = 2252

    prod.vm.hostname = "openecoe-webui"

    prod.vm.provision "ansible_local" do |ansible|
      ansible.verbose = "v"
      ansible.limit = "webui"
      ansible.provisioning_path = "/tmp/deploy"
      ansible.vault_password_file  = "ansible_vault.pass"
      #ansible.galaxy_role_file = "requeriments.yml"
      ansible.playbook = "setup.yml"
      ansible.inventory_path = "inventory/production"
      ansible.compatibility_mode = '2.0'
      ansible.install_mode = "pip"
      ansible.extra_vars = { ansible_python_interpreter:"/usr/bin/python3" }
    end
  end

  config.vm.define "chrono", autostart: false do |prod|
    prod.vm.network "private_network", ip: "192.168.11.43"
    prod.vm.network "forwarded_port", guest: 2252, host: 1143

    #prod.ssh.port = 1143
    #prod.ssh.guest_port = 2252

    prod.vm.hostname = "openecoe-chrono"

    prod.vm.provision "ansible_local" do |ansible|
      #ansible.verbose = "v"
      ansible.limit = "chrono"
      ansible.provisioning_path = "/tmp/deploy"
      ansible.vault_password_file  = "ansible_vault.pass"
      #ansible.galaxy_role_file = "requeriments.yml"
      ansible.playbook = "setup.yml"
      ansible.inventory_path = "inventory/production"
    end
  end

  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
    v.cpus = 2
  end
end
