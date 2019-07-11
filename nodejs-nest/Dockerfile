
FROM node:8.10

RUN mkdir -p /app
WORKDIR /app
#COPY . /app
RUN npm i -g @nestjs/cli

EXPOSE 8080
CMD ["nest", "new", "nest-test"]
#CMD ["/bin/bash", "run.sh"]
