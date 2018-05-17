---
# configuration for vagrant

env: develop
hostname: openecoe-api-vagrant
app_fqdn: dev.api.openecoe.umh.es
app_port: 5000

#ansible_ssh_user: ubuntu
#ansible_ssh_private_key_file: "{{ lookup('env', 'PWD') }}/server.pem"
ansible_connection: local

# Enviroment Config
project_main_controller: openECOE-API
project_path: "{{base_path}}/{{project_main_controller}}"

venv_path: "{{project_path}}/.venv"
requirements_path: "{{project_path}}/requirements.txt"

app_secret_key: 'f24b05095b4748a8b9d13df5cdb8d83c'
app_debug: True
app_testing: False

bcrypt_log_rounds: 4
sqlalchemy_track_modifications: False

api_auth: False

database_name: "{{project_main_controller}}_{{env}}"
database_user: "openecoe"
database_password: "8luz80d6OAqboKCasW2X"