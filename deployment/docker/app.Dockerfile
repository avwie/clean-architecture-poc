## Build the app
FROM avwie/clean-architecture-poc:workspace AS builder

ARG APP_NAME

LABEL stage=builder

WORKDIR /workspace

RUN pnpm --filter @avwie/$APP_NAME deploy --prod ./deploy

## Build the final image
FROM node:18-alpine

COPY --from=builder /workspace/deploy /app

CMD [ "node", "/app/dist/index.js" ]
