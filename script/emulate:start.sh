sh script/killPort.sh 5001
sh script/killPort.sh 5002

firebase use sp-intro
# firebase emulators:start --import=test/fixture/savedData --export-on-exit
# firebase emulators:start --import=test/fixture/savedData --project=demo-io-box-develop
# source ~/.nvm/nvm.sh
# nvm use 16

NITRO_PRESET=firebase npm run build
firebase emulators:start --project=sp-intro