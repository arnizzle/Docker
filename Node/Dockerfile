FROM node:alpine

# Change to working dir
WORKDIR /usr/app

# First copy package.json
COPY ./package.json ./

# Run npm install after copying package.json. 
# This makes sure dependencies are cached, and we're able to modify other files without re-caching
RUN npm install

# Then copy the rest of the files
COPY ./ ./

RUN npm install

CMD ["npm", "start"]