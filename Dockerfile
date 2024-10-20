FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app/cms
COPY cms/package*.json ./

COPY cms/. .
RUN bun install
RUN bun build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/cms/payload.config.js

WORKDIR /home/node/app/cms
COPY cms/package*.json  ./
COPY cms/bun.lock ./

RUN bun install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build

EXPOSE 3000

CMD ["npx payload migrate", "node", "dist/server.js"]
