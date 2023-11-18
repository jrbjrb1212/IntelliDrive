# Use an official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /my-react-app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from your local directory to the container
COPY . .

# Expose port 3000 (or the port your React app runs on)
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]