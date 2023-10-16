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

### Iniciar un Contenedor

- `docker run hola-mundo`: Ejecuta un contenedor con la imagen "hola-mundo".

### Descargar una Imagen

- `docker pull mysql`: Descarga la imagen de MySQL desde el registro de Docker.

### Listar Imágenes

- `docker images`: Muestra una lista de las imágenes Docker que se han descargado.

### Iniciar un Contenedor MySQL

- `docker run -e MYSQL_ROOT_PASSWORD=eder --name mymysql mysql`: Inicia un contenedor MySQL con una contraseña específica.

- `docker exec -it mymysql bash`: Accede al contenedor MySQL para realizar tareas de administración.

### Crear una Segunda Base de Datos MySQL

- `docker run --name otrabasemysql -p 7777:3306 -e MYSQL_ROOT_PASSWORD=eder12 mysql`: Crea una segunda base de datos MySQL con una contraseña diferente.

### Listar Contenedores en Ejecución

- `docker ps`: Muestra una lista de todos los contenedores en ejecución junto con detalles como ID, imagen y puertos.

### Detalles de los Contenedores en Ejecución

| CONTAINER ID | IMAGE | COMMAND              | CREATED        | STATUS        | PORTS                             | NAMES         |
| ------------ | ----- | -------------------- | -------------- | ------------- | --------------------------------- | ------------- |
| 77b34546ef27 | mysql | docker-entrypoint.sh | 49 seconds ago | Up 48 seconds | 33060/tcp, 0.0.0.0:7777->3306/tcp | otrabasemysql |
| 8c7a027ac412 | mysql | docker-entrypoint.sh | 16 minutes ago | Up 16 minutes | 3306/tcp, 33060/tcp               | mymysql       |

### Reiniciar un Contenedor MySQL

- `docker restart projectMysql`: Reinicia un contenedor MySQL.

### Configurar MySQL

- `docker cp D:/Opera/my.cnf projectMysql:/etc/my.cnf`: Copia un archivo de configuración personalizado a un contenedor MySQL.

### Crear una Red Docker

- `docker network create mynetwork`: Crea una red Docker personalizada.

### Iniciar un Contenedor de MongoDB

- `docker run --name mymongo -p 27017:27017 mongo`: Inicia un contenedor de MongoDB y expone el puerto 27017.

### Crear una Imagen Personalizada

- `docker build -t nodeprueba .`: Crea una imagen personalizada llamada "nodeprueba" a partir de un Dockerfile en el directorio actual.

### Escanear Vulnerabilidades de una Imagen

- `docker scout cves nodeprueba`: Escanea una imagen Docker llamada "nodeprueba" en busca de vulnerabilidades conocidas.

### Ver Recomendaciones para una Imagen

- `docker scout recommendations nodeprueba`: Muestra recomendaciones de seguridad para la imagen "nodeprueba".

### Iniciar una Aplicación Node.js

- `docker run --name server1 -p 5000:4000 nodeprueba`: Inicia una aplicación Node.js en un contenedor y la expone en el puerto 5000.

### Etiquetar una Imagen

- `docker tag nodeprueba:latest ederlg/dockerpractica:tagname`: Etiqueta la imagen "nodeprueba" con una etiqueta personalizada.

### Subir una Imagen a un Repositorio

- `docker push ederlg/dockerpractica:tagname`: Sube una imagen etiquetada a un repositorio de Docker.

### Trabajar con MySQL

- `mysql -u root -p`: Ingresa a MySQL.

- `show databases`: Muestra una lista de bases de datos en MySQL.

- `create database Base1`: Crea una nueva base de datos en MySQL.

- `use Base1`: Cambia al contexto de la base de datos "Base1".

- `create table user (id int PRIMARY KEY);`: Crea una tabla llamada "user" con una columna "id" en la base de datos.

- `describe user`: Muestra la estructura de la tabla "user".

- `use Base1`: Cambia al contexto de la base de datos "Base1".

## Demo

![Imagen](https://i.ibb.co/dgMX41y/2023-10-14-23-38-43.gif)
