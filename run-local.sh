echo "Change nvm"
source ~/.bash_profile
nvm use || { echo "Error changing node version"; exit 1; }

echo "Starting up local weather01 API"
npm run start-serve || { echo "Error running local weather01 API"; exit 1; }
