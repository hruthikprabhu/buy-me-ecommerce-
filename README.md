# buy@me eCommerce

## Overview
Simple eCommerce frontend with a Node.js/Express backend and MySQL for user authentication.

## Requirements
- Node.js (LTS recommended)
- MySQL (running locally)

## Setup
1. Install dependencies:
```bash
npm install
```

2. Configure DB in `home/backend/.env`:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=buyme
```

3. Start the server:
```bash
npm start
```

The server will open the app at:
```
http://localhost:5000/
```

## Features
- Products loaded from backend API
- Login/Signup stored in MySQL (passwords hashed)
- Static frontend served by Express

## Notes
- Always open the app via `http://localhost:5000/` (not `file://`) so DB calls work.
