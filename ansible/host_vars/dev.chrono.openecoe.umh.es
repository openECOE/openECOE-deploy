---
# configuration for vagrant

env: develop
hostname: openecoe-chrono-dev
app_fqdn: dev.api.openecoe.com
app_port: 6080

ansible_connection: local

# Enviroment Config
project_main_controller: openECOE-CHRONO
project_path: "{{base_path}}/{{project_main_controller}}"

venv_path: "{{project_path}}/.venv"
requirements_path: "{{project_path}}/requirements.txt"

app_secret_key: 'f24b05095b4748a8b9d13df5cdb8d83c'
app_debug: True
app_testing: False