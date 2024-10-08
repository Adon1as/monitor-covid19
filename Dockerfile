FROM openjdk:11.0.28
FROM maven:3.6.2

# image layer
WORKDIR /app
ADD pom.xml /app
RUN mvn verify clean --fail-never
COPY . /app
RUN mvn -v
RUN mvn clean install -DskipTests

ENTRYPOINT ["java","-jar","/app.jar"]