# Multi-stage build for Next.js application

# Stage 1: Dependencies
FROM node:22.18.0-alpine AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Stage 2: Builder
FROM node:22.18.0-alpine AS builder
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for building)
RUN npm ci

# Copy source code
COPY . .

# Build arguments
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Build the application
RUN npm run build

# Stage 3: Runner
FROM node:22.18.0-alpine AS runner
WORKDIR /app

# Add non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set NODE_ENV
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Copy production dependencies
COPY --from=deps /app/node_modules ./node_modules

# Change ownership to non-root user
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variables
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/health', (r) => {r.statusCode === 200 ? process.exit(0) : process.exit(1)})" || exit 1

# Start the application
CMD ["node", "server.js"]