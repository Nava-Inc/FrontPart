FROM node:18-alpine

WORKDIR /react-docker

# Copy just package.json and package-lock.json first to leverage Docker caching
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY public/ public/
COPY src/ src/

# Start the application
CMD ["npm", "start"]
