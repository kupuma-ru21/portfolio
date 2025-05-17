# REF: https://www.googlecloudcommunity.com/gc/Community-Blogs/No-servers-no-problem-A-guide-to-deploying-your-React/ba-p/690760
# REF: https://pnpm.io/docker
# Before running "gcloud builds submit -t ...", you have to login using "gcloud auth login" and "gcloud config set project ..."

FROM node:20.19.2-alpine3.21 AS base

RUN corepack enable
WORKDIR /app

FROM base AS build
COPY . .
RUN pnpm install
RUN pnpm build
RUN rm -f .env

FROM base
COPY --from=build /app /app
EXPOSE 3000
CMD [ "pnpm", "start" ]
