# Prueba para fullstack senior developer Periferia

## Introducción

Este proyecto demuestra mi capacidad para diseñar arquitecturas escalables y resolver desafíos técnicos complejos mediante la implementación de un sistema full-stack con microservicios. El objetivo es exhibir competencias en:

+ ***Desarrollo de Software Moderno***: Integración de tecnologías backend/frontend con énfasis en buenas prácticas.
+ ***Gestión de Infraestructura***: Orquestación de servicios con Docker Compose y contenedores Docker.
+ ***Resolución de Problemas***: Implementación de soluciones para autenticación, gestión de estado, interacción con bases de datos y comunicación entre componentes.

Este proyecto sirve como evidencia tangible de mi capacidad para diseñar, implementar y desplegar soluciones robustas adaptables a requisitos empresariales complejos.

## Tabla de contenidos

- [Introducción](#introducción)
- [Stack Tecnológico](#stack-tecnológico)
- [Funcionalidades](#funcionalidades)
- [Instalación](#instalación)
- [Enlaces relevantes](#enlaces)

## Stack Tecnológico

### Backend

+ ***Node.js + Express.js***: API REST con enrutamiento modular.
+ ***PostgreSQL + Prisma ORM***: Modelado de datos y queries type-safe.
+ ***JWT***: Autenticación segura con tokens.
+ ***Swagger***: Documentación interactiva del API.
+ ***CORS***: Configuración para entornos de desarrollo.

### Frontend

+ ***React.js + React Router***: Interfaz dinámica con navegación SPA.
+ ***Redux Toolkit***: Gestión predecible del estado global.
+ ***Axios***: Comunicación eficiente con el backend.
+ ***Tailwind CSS***: Estilizado ágil con utility-first.

### Infraestructura

+ ***Docker***: Contenerización de servicios.
+ ***Docker Compose***: Orquestación de microservicios (backend, frontend, base de datos).

## Funcionalidades

Estas funcionalidades resaltan la capacidad del proyecto para gestionar usuarios, autenticar sesiones, mostrar perfiles personales y compartir contenido entre usuarios, todo ello dentro de una arquitectura escalable y segura.

Este proyecto ofrece las siguientes funcionalidades clave:

### Registro de Usuarios

+ Interfaz de Registro: Formulario interactivo para que los usuarios nuevos puedan registrarse en la aplicación.

### Inicio de Sesión (Login)

+ Formulario de Inicio de Sesión: Interfaz para que los usuarios existentes puedan acceder a la aplicación.
+ Autenticación con Tokens JWT: Uso de tokens JWT para verificar la identidad del usuario y asegurar sesiones seguras.

### Validación de Autenticación y Autorización

+ Wrapper de Autenticación: Componente que verifica si el usuario está autenticado antes de permitir el acceso a áreas protegidas.

### Perfil del Usuario

+ Página de Perfil: Vista personalizada que muestra información del usuario, como nombre, email y otros datos relevantes.
+ Visualización de Datos: Presentación clara y organizada de los detalles del usuario.

### Publicaciones de Usuarios

+ Página de Publicaciones: Sección donde se listan las publicaciones de todos los usuarios, permitiendo una visión general de la actividad en la plataforma.

## Instalación

Para trabajar con este proyecto, necesitarás tener instalados y configurados los siguientes componentes:

### Git

+ ***Instalación***: Si no tienes Git instalado, puedes descargarlo desde su sitio web oficial: https://git-scm.com/downloads
+ ***Configuración***: Una vez instalado, configura tu nombre de usuario y correo electrónico ejecutando los siguientes comandos en tu terminal:
```bash
$ git config --global user.name "TuNombre"
$ git config --global user.email "tuemail@example.com"
```

### Docker

#### Instalar en Ubuntu

1. Actualiza tu sistema con el siguiente comando
    ```bash
    $ sudo apt update -y && sudo apt upgrade -y
    ```
1. Instalar ***Docker***
   ```bash
   $ sudo apt install apt-transport-https ca-certificates curl software-properties-common
   $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
   $ echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   $ sudo apt update
   $ sudo apt install docker-ce docker-ce-cli containerd.io
   ```

#### Instalar en Windows

1. Descarga e instala Docker Desktop desde su sitio web oficial: https://www.docker.com/products/docker-desktop
1. Sigue las instrucciones del instalador para completar la instalación.

### Docker compose

#### Instalar en ubuntu
1. Descarga Docker Compose:
    ```bash
    $ sudo curl -L "https://github.com/docker/compose/releases/download/v2.17.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    ```
1. Otorga permisos de ejecución:
    ```bash
    $ sudo chmod +x /usr/local/bin/docker-compose
    ```
1. Crea un enlace simbólico (opcional):
    ```bash
    $ sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
    ```

#### Instalar en windows

Viene incluido con Docker Desktop. Si lo necesitas como herramienta independiente, sigue los pasos para Windows Server en la documentación oficial: https://docs.docker.com/compose/install/standalone/

### Postman

+ Instalación: Descarga e instala Postman desde su sitio web oficial: https://www.postman.com/downloads/
+ Uso: Utiliza Postman para realizar pruebas al backend, enviando solicitudes HTTP a las APIs configuradas.

### React y Redux DevTools

+ Instalación:
    + React DevTools: Instala la extensión de Chrome o Firefox desde su tienda de aplicaciones.
    + Redux DevTools: Instala la extensión de Chrome o Firefox desde su tienda de aplicaciones.
+ Uso: Utiliza estas herramientas para depurar el frontend en el navegador, inspeccionando el estado de la aplicación y el flujo de datos.

Con estos componentes instalados y configurados, estarás listo para trabajar con el proyecto y realizar pruebas tanto en el frontend como en el backend.

Para iniciar el proyecto abre una consola en la raíz del proyecto y ejecuta el comando:
```bash
$ sh launch.sh
```

## Seeds

### Users

| Email             | Password     | Name        |
|-------------------|--------------|-------------|
| test1@example.com | testpassword | Test User 1 |
| test2@example.com | testpassword | Test User 2 |
| test3@example.com | testpassword | Test User 3 |
| test4@example.com | testpassword | Test User 4 |

## Enlaces

+ [Repositorio Github](https://github.com/hegariro/periferia-technical-test/tree/master)
+ [Documetación Swagger del API](http://localhost:4000/api-docs)
+ [Registro de usuarios](http://localhost:4000/api/auth/register)
+ [Login](http://localhost:4000/api/auth/login)
+ [Logout](http://localhost:4000/api/auth/logout)
