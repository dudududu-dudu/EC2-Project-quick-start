@echo off
setlocal

set APP_NAME=static-web-app

for /f "delims=" %%i in ('docker ps -a --format "{{.Names}}"') do (
    if /i "%%i"=="%APP_NAME%" (
        echo Stopping container "%APP_NAME%"...
        docker stop %APP_NAME% >nul
        docker rm %APP_NAME% >nul
        echo Terminated "%APP_NAME%"
        goto :eof
    )
)

echo Container "%APP_NAME%" not found.
pause
