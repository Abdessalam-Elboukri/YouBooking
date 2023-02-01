FROM openjdk:11
WORKDIR app/
COPY target/youbooking-jar.jar app/
EXPOSE 8088
ENTRYPOINT ["java","-jar","app/youbooking-jar.jar"]
