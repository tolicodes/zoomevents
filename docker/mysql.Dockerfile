FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD 123  
ENV MYSQL_DATABASE zoomevents  
ENV MYSQL_USER user  
ENV MYSQL_PASSWORD 123

COPY ./mysql-setup.sql mysql-setup.sql 

ADD ./mysql-setup.sql /docker-entrypoint-initdb.d