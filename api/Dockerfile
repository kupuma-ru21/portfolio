# syntax=docker/dockerfile:1
# Ref: https://docs.docker.com/guides/golang/build-images/
# Ref: https://www.googlecloudcommunity.com/gc/Community-Blogs/No-servers-no-problem-A-guide-to-deploying-your-React/ba-p/690760

FROM golang:1.23.2

ARG ENV
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_HOST
ARG POSTGRES_PORT
ARG POSTGRES_DB
ARG PORT
ARG JWT_SECRET_KEY

ENV ENV=${ENV}
ENV POSTGRES_USER=${POSTGRES_USER}
# TODO: rename passoward to something to remove a warning
ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
ENV POSTGRES_DB=${POSTGRES_DB}
ENV POSTGRES_HOST=${POSTGRES_HOST}
ENV POSTGRES_PORT=${POSTGRES_PORT}
ENV PORT=${PORT}
ENV JWT_SECRET_KEY=${JWT_SECRET_KEY}

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code. Note the slash at the end, as explained in
# https://docs.docker.com/reference/dockerfile/#copy
COPY ./ ./

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o /portfolio-api

# Optional:
# To bind to a TCP port, runtime parameters must be supplied to the docker command.
# But we can document in the Dockerfile what ports
# the application is going to listen on by default.
# https://docs.docker.com/reference/dockerfile/#expose
EXPOSE ${PORT}

# Run
CMD ["/portfolio-api"]
