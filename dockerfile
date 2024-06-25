# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm rebuild bcrypt --build-from-source

# Build the application
RUN npm run build

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the application
CMD ["npm", "run", "start:dev"]
