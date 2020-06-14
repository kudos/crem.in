FROM node:14

WORKDIR /app

ENV PORT 3000
EXPOSE 3000

CMD ["yarn", "run", "build"]
