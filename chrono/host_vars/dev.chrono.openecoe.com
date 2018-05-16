---
# configuration for vagrant

env: develop
hostname: openecoe-chrono-dev
app_fqdn: chrono.openecoe.com
app_port: 5100

#ansible_ssh_user: ubuntu
#ansible_ssh_private_key_file: "{{ lookup('env', 'PWD') }}/server.pem"
ansible_connection: local

# Enviroment Config
app_debug: True