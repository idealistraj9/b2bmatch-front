# Use an official Node.js 18 runtime as a base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --force

# Copy the rest of your app's source code
COPY . /app

# Expose the port your app runs on
EXPOSE 4000

# Command to run the app
CMD ["npm", "run", "dev"]
