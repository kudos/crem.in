FROM node:12.14.1-alpine3.11

WORKDIR /app

RUN apk add --update git python make g++

ENV PORT 3000
EXPOSE 3000

CMD ["npm", "run", "build"]
