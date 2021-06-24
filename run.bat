@echo off
:start
if exist node_modules\ (
    echo Starting bot...
) else (
    echo Installing packages...
    npm install
    goto start
)
:main
node index.js
echo OwO what's this, the bot crashed, restarting it ;3
goto main