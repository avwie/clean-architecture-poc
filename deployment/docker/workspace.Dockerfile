FROM node:18-alpine

# Install PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /workspace

COPY . .

RUN pnpm install

RUN pnpm build
