<img src="/doc/logoUMH.jpg" align="right" width="300" ></a>
# openECOE-deploy

Realiza el despliegue de los módulos necesarios para la **openECOE**:
-   [**openECOE-API**](https://github.com/openECOE/openECOE-API)
-   [**openECOE-chrono**](https://github.com/openECOE/openECOE-chrono)
-   [**openECOE-WebUI-ng**](https://github.com/openECOE/openECOE-WebUI-ng)

## Requerimientos

- Ansible 2.2+
- Vagrant 2.2.6 (opcional)
- Requisitos máquina:
	- 2 vcpu  
	- 4GB RAM
	- 30GB Disco duro
	- Ubuntu 16.04 en adelante

## Despliegue mediante ansible

Según si el despliegue se realiza localmente o remotamente se debe modificar el parámetro de configuración ansible_connection ubicado en */ansible/group_vars/all.yml*

Despliegue local

     ansible_connection: local

Despliegue remoto

    ansible_connection: ssh
    ansible_user: openecoe
    ansible_port: 22
    ansible_host: "{{domain}}"
    ansible_ssh_private_key_file: "{{ lookup('env', 'HOME') }}/.ssh/id_rsa"

Ejecutar Ansible playbook para comenzar el despliegue

    ansible-playbook -b -i "inventory/production" -l "production" setup.yml -v --extra-vars "ansible_sudo_pass=[sudopass]"

## Creación maquina virtual con Vagrant

Instalar vagrant desde la página oficial

Con la configuración actual del fichero **Vagrantfile** se pueden crear varias configuraciones de máquinas virtuales.

Todos los módulos
```
vagrant up full
```

Módulos individuales
```
vagrant up api
vagrant up webui
vagrant up chrono
```
## Licencia
This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg3NzA2OTI4NywxMTI1NTIwOTk2LC05NT
AyMzc4NywtMTQ3MzU1NjIxN119
-->