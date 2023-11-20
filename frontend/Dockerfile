# Use official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /intelli_drive

# Copy all files from local directory to the container
COPY ./intelli_drive .

# Install dependencies
RUN npm install
RUN npm install react-router-dom

# Expose port 3000 (or the port that React app runs on)
EXPOSE 3000

# Start React development server
CMD ["npm", "start"]