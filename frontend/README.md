# Time Display Frontend

This is a simple HTML frontend that displays the current time by fetching data from the Time API.

## Features

- Real-time time display that updates every second
- Beautiful, responsive design with glassmorphism effects
- Shows current time, date, and timezone
- Auto-refresh functionality
- Error handling and status indicators
- Mobile-responsive design

## How it works

The frontend fetches time data from the Time API at `http://localhost:3000/api/time` and displays it in a modern, user-friendly interface.

## API Endpoint

- **GET** `/api/time` - Returns current time information in JSON format

## Running the containers

To run both the API and frontend containers:

```bash
docker-compose up --build
```

This will start:
- Time API on port 3000
- Frontend on port 8080

## Accessing the application

- **Frontend**: http://localhost:8080
- **API**: http://localhost:3000/api/time

## Container Architecture

- **time-api**: Node.js Express server providing time data
- **frontend**: Nginx server serving the HTML interface

The frontend container depends on the time-api container and will wait for it to be ready before starting.
