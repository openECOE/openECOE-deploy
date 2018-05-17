---
# configuration for vagrant

env: develop
hostname: openecoe-webui-dev
app_fqdn: dev.openecoe.umh.es

#ansible_ssh_user: ubuntu
#ansible_ssh_private_key_file: "{{ lookup('env', 'PWD') }}/server.pem"
ansible_connection: local

# Enviroment Config
project_main_controller: openECOE-WebUI
project_path: "{{base_path}}/{{project_main_controller}}"

venv_path: "{{project_path}}/.venv"
requirements_path: "{{project_path}}/requirements.txt"

app_secret_key: 'f24b05095b4748a8b9d13df5cdb8d83c'
app_debug: True
app_testing: False

api_uri: "http://dev.api.openecoe.umh.es"
api_route: "{{api_uri}}/api"
api_auth_token: "{{api_uri}}/auth/tokens"