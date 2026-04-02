# Dockerfile for Advanced Calculator

# Use lightweight Node.js image for serving
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Set environment
ENV NODE_ENV=production

# Start server
CMD ["npm", "start"]
