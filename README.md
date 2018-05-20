# Peanut Butter Crackers - Client

Client for a multiplayer quiz game, using Pusher channels. Created for the [Dev.to Pusher contest](https://dev.to/devteam/first-ever-dev-contest-build-a-realtime-app-with-pusher-4nhp).

The server component is located [here](https://github.com/pbcrackers/pbc-server);

## Prerequisites
- Node.js 8+
- Yarn

## Installation
1. Clone the repository
2. Run `yarn install` to install dependencies
3. Setup a Pusher account if you don't have one
4. Add the following values for your Pusher app to your .env file or set them in your environment:
    1. VUE_APP_PUSHER_API_KEY
    2. VUE_APP_PUSHER_CLUSTER
5. Run `yarn serve` to start the client
