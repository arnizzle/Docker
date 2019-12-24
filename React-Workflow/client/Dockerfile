# Build phase
#
# Completed build will be used by production

FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN ["npm", "run", "build"]

# Prod phase
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html


