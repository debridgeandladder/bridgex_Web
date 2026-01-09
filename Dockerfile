FROM node:18-alpine

WORKDIR /app

# Install build deps used by some packages
RUN apk add --no-cache git make g++ python3

# Copy package manifests and pnpm lock first for caching
COPY package.json pnpm-lock.yaml ./

# Copy patch files so pnpm can apply them
COPY patches ./patches

# Enable corepack and install dependencies
RUN corepack enable && corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile

# Copy the rest of the repository
COPY . .

# Build the client and server (scripts/build-server.mjs writes server bundle to dist)
RUN pnpm build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "dist/index.js"]
