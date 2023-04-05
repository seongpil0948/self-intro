KILL_PORT=$1
echo "$0 kill port: $KILL_PORT"
lsof -ti tcp:$KILL_PORT | xargs kill -9