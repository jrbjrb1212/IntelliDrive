# IntelliDrive
Description: Definitely not Waymo or Cruise


## Getting Started
This project combines a ReactJS frontend with backend API services written in Java that are supported via the Maven and Springboot frameworks. The code of this project is run able on any computer using the idea of [containerization](https://www.checkpoint.com/cyber-hub/cloud-security/what-is-container-security/what-is-containerization/#:~:text=Containerization%20is%20a%20type%20of,and%20highly%20conducive%20to%20automation.) with [Docker](https://docs.docker.com/get-started/overview/). 
- The docker infrastructure for this project was developed by Mason Horne ([Email him](https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs)) and any questions should be directed at him.

The project is meant to be implement and developed locally and then deployed to a docker container for **modularity**. However, it is hard to run someone else's code on without the correct libraries/frameworks installed, so we have made it fully possible to develop the code within the docker containers.
- *Any mention of run this means run that command in a terminal

**Steps for set up:**

- Install DockerDesktop via [download link](https://www.docker.com/products/docker-desktop/)

- Open docker desktop and make sure that the engine is running (lower left hand corner) when trying to execute a docker command

<p align="center"><img width="600" src="https://github.com/jrbjrb1212/IntelliDrive/blob/main/README_Images/docker_example.png?raw=true"></p>

**Yours shouldn't have the four images but the bottom left corner should have the words engine running**

- Clone the code using the **git clone https://github.com/jrbjrb1212/IntelliDrive.git** or any type of version control with your IDE

**Deploy the code via Docker:**
- Navigate to the outermost directory that contains this file and the [docker-compose.yml](https://github.com/jrbjrb1212/IntelliDrive/blob/main/README.md) file 

- Run the command below to make sure docker is running
```sh
$ docker --version
```

- Run the command below and wait between 30 seconds - 5 minutes for the code to build
```sh
$ docker-compose up
```

- The web application is now locally hosted and can be accessed at [http://localhost:3000/](http://localhost:3000/)

- The backend APIs are also locally hosted and are index by [http://localhost:8080/api/](http://localhost:8080/api/) where anything after /api/* should be an API that is developed within this class. A sample example is at [http://localhost:8080/api/hello](http://localhost:8080/api/hello) 

- To work on a docker container, use the commands below
- Find the running docker images
```sh
$ docker container ls
```
```sh
$ docker exec -it DOCKERID /bin/bash
```
- where the DOCKERID is obtained from the docker container ls command output

**Deploy locally for development:**
- This will be about 10x faster in between updating code and seeing the results, but there are a bunch of dependencies issues

- Need to install:
    - [Node](https://nodejs.org/en/download) to run the frontend application
    - [Java 17](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html) to run the backend java code
    - [Maven](https://maven.apache.org/download.cgi) to run the backend application
- Test installs using:
    - **npm --version** for Node
    - **java --version** for Java 17 or 21
        - Verify that Java 17 or 21 is installed should be something like openjdk 17.0.something or 21.0.something
    - **mvn --version** for Maven

*Now we hope and pray that the installed frameworks are close enough to the code to work*
- Open two terminal windows
- In one terminal window, navigate to the frontend/intelli_drive/
    - Run npm install
    - Run npm install axios
    - Run npm start
- In the other terminal window, navigate to backend/backend_services/
    - Run mvn spring-boot:run
- If everything went well, the frontend will be hosted at [http://localhost:3000/](http://localhost:3000/) and the various API will reachable through urls similar to [http://localhost:8080/api/](http://localhost:8080/api/)


**Using the code notes:**
- Every time there are changes made to the backend services source code the backend code needs to be recompiled through relaunching the docker containers or rerunning the local deployment
- The frontend will be updated in real time after each file save
- All of the frontend code is available in this [folder](https://github.com/jrbjrb1212/IntelliDrive/tree/main/frontend/intelli_drive/src)
- All of the backend code is available in this [folder](https://github.com/jrbjrb1212/IntelliDrive/tree/main/backend/backend_services/src/main/java/com/vers1/backend_services)

## Technologies Used:
- ReactJS for the frontend facing web application
    - ReactJS is the most popular web framework on Earth
    - For more information, [check this out](https://legacy.reactjs.org/tutorial/tutorial.html)
- Maven and Springboot for the Java API requests backend
    - Maven is a build automation tool to build java libraries ([more info](https://maven.apache.org/what-is-maven.html))
    - Springboot is an application framework built around the idea of extensions which are configurable subframeworks ([more info](https://spring.io/guides/gs/spring-boot/))
    - In this project, Springboot's web requests extension is used to with the ReactJS application via HTTP requests. 
- Difference between a library and framework:
    - A library like Java.random or Java.system make code cleaner by providing standard reusable declarations of code packaged as methods
    - A framework provides abstraction over lower level features of an application that can be automated or configured away
    - Ex: A library may load data for you in a program. A framework makes it possible to download data from the internet without thinking about setting up the communication

## Background
- Information coming soon

## Design of Application
- Graphic coming soon


## Functionality
-  Desorption coming soon

## Adding to the group project
- Every pull request (code update) requires at least one other person to approve it before being merged into the main branch
- The first few pull requests will be reviewed by Group 3, but eventually we will spread these across other groups
- There is a branch set up for each group and these should be used by each group
- After there has been some progress that other groups would benefit from, submit a pull request (code update) from that branch to the main branch