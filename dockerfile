# Build stage
FROM node:20 AS builder

WORKDIR /app

# Copy and build client
COPY client/package.json client/package-lock.json ./client/
RUN cd client && npm ci

COPY client ./client
RUN cd client && npm run build

# Install server dependencies
COPY server/package.json server/package-lock.json ./server/
RUN cd server && npm ci --production

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Copy built artifacts
COPY --from=builder /app/client/dist ./client/dist
COPY --from=builder /app/server/node_modules ./server/node_modules

# Copy server source
COPY server ./server

# Set environment
ENV NODE_ENV=production
ENV PORT=5000

# Serve React app from Express
CMD ["node", "server/index.js"]