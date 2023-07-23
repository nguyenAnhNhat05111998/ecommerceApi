#From the base image node
FROM node:18-alpine3.17

RUN mkdir -p /home/app

WORKDIR /home/app

# Copy all the files from your file system to the container file system
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy other files as well
COPY . .

# Expose the port
EXPOSE 3000

# Command to execute when the image is instantiated
CMD ["npm","start"]

