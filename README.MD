# Docker: Contenerización Simplificada

## Características clave de Docker:

1. **Contenedorización:** Docker utiliza tecnologías de contenedorización para empaquetar aplicaciones y sus dependencias en contenedores. Un contenedor es una unidad ligera y autónoma que incluye todo lo necesario para que una aplicación se ejecute, como código, bibliotecas, entorno de tiempo de ejecución y variables de entorno. Los contenedores se ejecutan de manera aislada y consistente en cualquier entorno que admita Docker.

2. **Portabilidad:** Los contenedores Docker son altamente portátiles. Puedes crear un contenedor en tu entorno de desarrollo, probarlo y luego ejecutarlo en un servidor de producción sin problemas. Esto garantiza que las aplicaciones funcionen de la misma manera en diferentes entornos.

3. **Eficiencia:** Docker utiliza una tecnología de contenedorización eficiente que comparte recursos del sistema operativo subyacente. Esto permite una ejecución eficiente y reduce la sobrecarga de recursos en comparación con las máquinas virtuales tradicionales.

4. **Aislamiento:** Los contenedores Docker brindan un alto grado de aislamiento. Cada contenedor se ejecuta en su propio espacio de usuario y sistema de archivos, lo que significa que las aplicaciones y procesos no interfieren entre sí.

5. **Orquestación:** Docker se integra con herramientas de orquestación, como Docker Compose, Kubernetes y Docker Swarm, que permiten la administración y escalabilidad de aplicaciones en contenedores en entornos de producción. Estas herramientas facilitan la implementación y administración de aplicaciones a gran escala.

6. **Imágenes Docker:** Docker utiliza imágenes como plantillas para crear contenedores. Una imagen Docker es un paquete que incluye la aplicación, sus dependencias y configuraciones. Las imágenes se almacenan en registros Docker, como Docker Hub, y se pueden compartir con otros desarrolladores y equipos.

7. **Integración continua (CI) y Entrega continua (CD):** Docker se utiliza comúnmente en prácticas de CI/CD para crear un entorno de desarrollo y pruebas coherente, lo que permite una implementación más rápida y confiable de aplicaciones.

8. **Escalabilidad:** Docker facilita la escalabilidad de aplicaciones al permitir la creación y administración de múltiples contenedores que trabajan juntos en un clúster o grupo de contenedores.

9. **Compatibilidad con múltiples sistemas operativos:** Docker se ejecuta en una variedad de sistemas operativos, incluidos Linux, Windows y macOS, lo que lo hace versátil para una amplia gama de aplicaciones.

## Comandos de Docker:

- `docker run hola-mundo`: Ejecuta un contenedor con la imagen "hola-mundo".
- `docker pull mysql`: Descarga la imagen de MySQL desde el registro de Docker.
- `docker images`: Puedo ver las imagenes que se descargo.
- `docker run -e MYSQL_ROOT_PASSWORD=eder --name mymysql mysql `: Descarga la imagen de MySQL desde el registro de Docker.
- `docker exec -it mymysql bash `: Descarga la imagen de MySQL desde el registro de Docker.
- `docker run --name otrabasemysql -p 7777:3306 -e MYSQL_ROOT_PASSWORD=eder12 mysql `: Crea otra base de datos con otra contraseña correspondiente.
- `docker ps `: Puedo ver todos los procesos ejecutandose.

CONTAINER ID IMAGE COMMAND CREATED STATUS PORTS NAMES  
77b34546ef27 mysql "docker-entrypoint.s…" 49 seconds ago Up 48 seconds 33060/tcp, 0.0.0.0:7777->3306/tcp otrabasemysql
8c7a027ac412 mysql "docker-entrypoint.s…" 16 minutes ago Up 16 minutes 3306/tcp, 33060/tcp mymysql

- `docker run --name projectMysql -p 3306:7777 -e MYSQL_ROOT_PASSWORD=eder mysql`: Crea una nueva pero necesito saber su direccion ip ya que de manera local no esta corriendo
- `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' projectMysql` : Me da la direccion -> 172.17.0.2

- `docker restart projectMysql ` : Reinicia
- `docker cp D:/Opera/my.cnf projectMysql:/etc/my.cnf ` : Configurando

- `docker network create mynetwork` : Creando una red 0b482c3f2e648abb4d7ccb76efce22acaaedfd0e8ccae418c2bbf6eb90e7a007

MYSQL:

- `mysql -u root -p `: Ingresar a mysql.
- `show databases `: Ver las bases de datos.
- `create database Base1 `: Ver las bases de datos.
- `use Base1 `: Usar la base de datos.
- `create table user (id int PRIMARY KEY); `: Crea una tabla
- `describe user `: Muestra la tabla.
- `use Base1 `: Usar la base de datos.
