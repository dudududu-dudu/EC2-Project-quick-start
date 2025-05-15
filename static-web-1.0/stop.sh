#!/bin/bash
set -e

APP_NAME="static-web-app"

if docker ps -a --format '{{.Names}}' | grep -i -w "$APP_NAME" > /dev/null; then
  echo "Stopping container $APP_NAME..."
  docker stop $APP_NAME > /dev/null
  docker rm $APP_NAME > /dev/null
  echo "Container $APP_NAME has been stopped and removed"
else
  echo "Container $APP_NAME does not exist"
fi
