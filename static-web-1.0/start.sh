#!/bin/bash
set -e

# === Configuration ===
APP_NAME="static-web-app"
BUILD_DIR="dist"
PORT=80

echo "=== Step 1: Install dependencies and build project ==="
npm install
npm run build

echo "=== Step 2: Create Dockerfile ==="
cat > Dockerfile <<EOF
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY ${BUILD_DIR} /usr/share/nginx/html
EXPOSE 80
EOF

echo "=== Step 3: Build Docker image ==="
docker build -t ${APP_NAME} .

echo "=== Step 4: Stop and remove existing container (if any) ==="
docker stop ${APP_NAME} 2>/dev/null || true
docker rm ${APP_NAME} 2>/dev/null || true

echo "=== Step 5: Start Docker container ==="
docker run -d -p ${PORT}:80 --name ${APP_NAME} ${APP_NAME}

echo
echo "App started. Access it at: http://<your-public-ip>:${PORT}"
