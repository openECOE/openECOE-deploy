# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.network "public_network"
  config.vm.synced_folder "./", "/tmp/deploy", mount_options: ["dmode=775,fmode=664"]

  config.vm.synced_folder ".", "/vagrant", disabled: true

  config.vm.define "production" do |prod|
    prod.vm.network "private_network", ip: "192.168.11.32"
    prod.vm.hostname = "openecoe"

    prod.vm.provision "ansible_local" do |ansible_api|
      #ansible.verbose = "vvv"
      ansible_api.limit = "production"
      ansible_api.provisioning_path = "/tmp/deploy/api"
      ansible_api.vault_password_file  = "ansible_vault.pass"
      #ansible_api.galaxy_role_file = "requeriments.yml"
      ansible_api.playbook = "setup.yml"
      ansible_api.inventory_path = "inventory/production"
    end

    prod.vm.provision "ansible_local" do |ansible_webui|
      #ansible.verbose = "vvv"
      ansible_webui.limit = "production"
      ansible_webui.provisioning_path = "/tmp/deploy/webui"
      ansible_webui.vault_password_file  = "ansible_vault.pass"
      #ansible_webui.galaxy_role_file = "requeriments.yml"
      ansible_webui.playbook = "setup.yml"
      ansible_webui.inventory_path = "inventory/production"
    end

    prod.vm.provision "ansible_local" do |ansible_chrono|
      #ansible.verbose = "vvv"
      ansible_chrono.limit = "production"
      ansible_chrono.provisioning_path = "/tmp/deploy/chrono"
      ansible_chrono.vault_password_file  = "ansible_vault.pass"
      #ansible_chrono.galaxy_role_file = "requeriments.yml"
      ansible_chrono.playbook = "setup.yml"
      ansible_chrono.inventory_path = "inventory/production"
    end
  end

  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
    v.cpus = 2
  end
end
