from node
RUN npm install -g serve
WORKDIR /app
# Separating here so docker caches node_modules.
COPY package.json ./
RUN yarn install
COPY . ./
RUN yarn build
CMD ["npx", "serve", "-s", "build", "-l", "${PORT}"]