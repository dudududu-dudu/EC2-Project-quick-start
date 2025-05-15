@echo off
setlocal

REM === set parm ===
set APP_NAME=static-web-app
set BUILD_DIR=dist
set PORT=80

echo === Step 1: install dependeces and build ===
call npm install
if %errorlevel% neq 0 exit /b %errorlevel%

call npm run build
if %errorlevel% neq 0 exit /b %errorlevel%

echo === Step 2: create Dockerfile ===
echo FROM nginx:alpine> Dockerfile
echo RUN rm -rf /usr/share/nginx/html/*>> Dockerfile
echo COPY %BUILD_DIR% /usr/share/nginx/html>> Dockerfile
echo EXPOSE 80>> Dockerfile

echo === Step 3: build Docker Mirroring ===
docker build -t %APP_NAME% .

echo === Step 4: stop and delete container (if exist) ===
docker stop %APP_NAME% >nul 2>&1
docker rm %APP_NAME% >nul 2>&1

echo === Step 5: start Docker container ===
docker run -d -p %PORT%:80 --name %APP_NAME% %APP_NAME%

echo.
echo app start succefully, to access: http://localhost:%PORT%
pause
