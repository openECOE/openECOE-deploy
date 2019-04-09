---
# configuration for production

env: production
hostname: openecoe-webui
app_fqdn: test.openecoe.umh.es

ansible_connection: local

# Enviroment Config
project_main_controller: openECOE-WebUI
project_path: "{{base_path}}/{{project_main_controller}}"

venv_path: "{{project_path}}/.venv"
requirements_path: "{{project_path}}/requirements.txt"

git_repo: "git@github.com:openECOE/openECOE-WebUI.git"
git_branch: develop

# Enviroment Config
app_secret_key: 'f24b05095b4748a8b9d13df5cdb8d83c'
app_debug: False
app_testing: False

api_uri: "http://localhost:8000"
api_route: "{{api_uri}}/api"
api_auth_token: "{{api_uri}}/auth/tokens"

chrono_route: "http://openecoe.umh.es:6080"

app_workers: 1

supervisor_user: root
supervisor_password: 'kkGFGhiK06BXdEW9gKi4j5VD'

#Deactivate supervisor http server in production
supervisor_inet_http_server_enable: false

gunicorn_server: "localhost:8080"
gunicorn_module: "{{project_main_controller}}:app"