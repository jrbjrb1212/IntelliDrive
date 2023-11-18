FROM maven:latest

WORKDIR /backend_services

COPY ./backend_services .

# Expose the necessary ports for the Spring application
EXPOSE 8080

CMD ["mvn", "spring-boot:run"]