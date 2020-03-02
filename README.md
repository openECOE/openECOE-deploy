<img src="/doc/logoUMH.jpg" align="right" width="300" ></a>
# openECOE-deploy
**openECOE-deploy** se trata de un playbook de Ansible para realizar el despliegue de los módulos necesarios para la **openECOE** desde cada uno de los repositorios git:
-   [**openECOE-API**](https://github.com/openECOE/openECOE-API)
-   [**openECOE-chrono**](https://github.com/openECOE/openECOE-chrono)
-   [**openECOE-WebUI-ng**](https://github.com/openECOE/openECOE-WebUI-ng)

El **método recomendado de despliegue es haciendo uso de Ansible**, aunque se incluye un archivo _Vagrantfile_ que permite utilizar
[**Vagrant**](https://www.vagrantup.com/) para crear máquinas virtuales de una forma rápida, principalmente para pruebas y desarrollo.

## Requerimientos
- [**Ansible**](https://docs.ansible.com/)
- Requisitos mínimos:
	- 2 vcpu  
	- 4GB RAM
	- 30GB Disco duro
	- Ubuntu 18.04 LTS

## Despliegue mediante Ansible
### Primeros pasos
[**Instala Ansible**](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) y ejecuta los siguientes comandos:

    # Clona este repositorio.
    git clone https://github.com/openECOE/openECOE-deploy.git
    
    # Accede al repositorio clonado
    cd openECOE-deploy
    
    # Accede a la carpeta que contiene el playbook de ansible
    cd ansible
    
    # Ejecuta el playbook de despliegue usando el inventario 'production'
    ansible-playbook --ask-become-pass -b -i "inventory/production" setup.yml

`--ask-become-pass` solicita la contraseña para ejecutar las operaciones con sudo

`-b` ejecuta el playbook como sudo

`-i` indica el inventario que se utiliza para el despliegue


Al ejecutar el playbook te solicitara los siguientes datos para configurar el entorno de openECOE:
- **dominio:** Dominio que usara openECOE para acceder mediante su interfaz web
- **organización:** Nombre de la organización
- **email admin:** Correo electrónico del usuario superadministrador del sistema
- **nombre admin:** Nombre del usuario superadministrador del sistema
- **apellidos admin:** Apellidos del usuario superadministrador del sistema
- **contraseña admin:** Contraseña del usuario superadministrador del sistema
- **nombre BBDD:** Nombre que se quiere emplear para la base de datos
- **usuario BBDD:** Usuario administrador de la base de datos
- **contraseña BBDD:** Contraseña usuario administrador de la base de datos

Una vez se han introducido los parámetros solicitados comenzara el despliegue de todos los módulos en la máquina en la 
que se ejecuta el playbook.

Al comienzo del proceso se crea automáticamente un fichero de configuración en la carpeta [**_configurations_**](/ansible/configurations/) con los parámetros introducidos que servira 
para poder volver a ejecutar el playbook con la misma configuración.

### Desplegar en una máquina remota
Se deben seguir los mismos pasos anteriores para clonar este repositorio, pero la diferencia es que se necesita indicar 
los parámetros de conexión de la máquina remota en la que se desea realizar el despliegue.

    # Ejecuta el playbook de despliegue usando el inventario 'production'
    ansible-playbook --ask-become-pass -b -i "inventory/production" setup.yml --extra-vars "ansible_connection=ssh ansible_host=[192.168.1.1] ansible_port=[22] ansible_user=[user] ansible_ssh_pass=[ssh_password]"
    
Para más información sobre como conectar con máquinas remotas mediante Ansible puede consultar la siguiente información:

[**Ansible - List of behavioral inventory parameters**][https://docs.ansible.com/ansible/2.3/intro_inventory.html#list-of-behavioral-inventory-parameters]
 
### Uso de una configuración almacenada

Es posible utilizar un archivo de configuración almacenado para lanzar el playbook con las variables que hace uso ya definidas.
En la carpeta [**_configurations_**](/ansible/configurations/) se encuentra un archivo [**_template.conf_**](/ansible/configurations/template.conf) que se puede utilizar de base
para definir una configuración personalizada.

También se almacena la configuración automáticamente cada vez que se lanza el despliegue en un archivo nombrado **_[dominio].conf_**.

Para lanzar el playbook tan solo se debe lanzar añadiendo la ruta del fichero de configuración de la siguiente forma:

    # Ejecuta el playbook haciendo uso del archivo de configuración
    ansible-playbook --ask-become-pass -b -i "inventory/production" setup.yml --extra-vars "@./configurations/[fichero_conf]"

## Licencia
Copyright (c) 2019 Universidad Miguel Hernandez de Elche

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details. You should have received a copy of the GNU General Public License along with this program. If not, see <http://www.gnu.org/licenses/>.


[https://docs.ansible.com/ansible/2.3/intro_inventory.html#list-of-behavioral-inventory-parameters]: https://docs.ansible.com/ansible/2.3/intro_inventory.html#list-of-behavioral-inventory-parameters