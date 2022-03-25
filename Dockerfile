FROM node:alpine as install

WORKDIR /install
ENV NODE_ENV=production
COPY yarn.lock ./
COPY .yarnrc.yml ./
COPY .yarn/ .yarn/
COPY package.json ./
COPY packages/ui-components/package.json ./packages/ui-components/package.json

RUN yarn
COPY packages/ui-components/. ./packages/ui-components

WORKDIR /install/packages/ui-components

RUN yarn

RUN npm run build

FROM node:alpine as production
ENV NODE_ENV=production
WORKDIR /build

COPY --from=install /install/. ./

EXPOSE 3000

WORKDIR /build/packages/ui-components

CMD node index.js