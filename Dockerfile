# base image
FROM node:8.9.1
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# MAINTAINER
MAINTAINER yichao@ricepo.com

# timezone
# RUN echo "Asia/Shanghai" > /etc/timezone;dpkg-reconfigure -f noninteractive tzdata


# set work space
# WORKDIR /home/vanguard

# copy application to docker container
WORKDIR /private-app
COPY . /private-app

RUN npm install  



# execute command to start server
CMD ["npm","run","dev"]
