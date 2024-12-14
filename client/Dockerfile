# Ref: https://www.googlecloudcommunity.com/gc/Community-Blogs/No-servers-no-problem-A-guide-to-deploying-your-React/ba-p/690760
# Ref: https://pnpm.io/docker
# Before running "gcloud builds submit -t ...", you have to login using "gcloud auth login" and "gcloud config set project ..."

FROM node:20-slim AS base

ARG PNPM_HOME
ARG PNPM_PATH
ARG CLIENT_PORT
ARG VITE_GRAPHQL_SCHEMA_URL
ARG VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID
ARG VITE_GOOGLE_TAG_MANAGER_CONTAINER_ID
ARG VITE_EMAIL
ARG VITE_RESEND_API_KEY


ENV PNPM_HOME=${PNPM_HOME}
ENV PNPM_PATH=${PNPM_PATH}
# NOTE: CLIENT_PORT can't be renamed to PORT
ENV PORT=${CLIENT_PORT}
ENV VITE_GRAPHQL_SCHEMA_URL=${VITE_GRAPHQL_SCHEMA_URL}
ENV VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID=${VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID}
ENV VITE_GOOGLE_TAG_MANAGER_CONTAINER_ID=${VITE_GOOGLE_TAG_MANAGER_CONTAINER_ID}
ENV VITE_EMAIL=${VITE_EMAIL}
ENV VITE_RESEND_API_KEY=${VITE_RESEND_API_KEY}

RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN pnpm install --prod

FROM base AS build
RUN pnpm install
RUN pnpm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
EXPOSE ${PORT}
CMD [ "pnpm", "start" ]
