## HighLoad Balance App

A simple web application built with Node.js, Express, and PostgreSQL (using Sequelize and Umzug) for high-load balance updates. The app supports atomic balance updates (both credit and debit) without explicit transaction-level locks. The project is written in TypeScript and demonstrates a clean project structure with controllers, services, migrations, models, middlewares, and validators.

Features
	•	Atomic Balance Updates: Updates balance atomically using a single SQL query with conditions.
	•	REST API Endpoint: A POST endpoint to update user balances.
	•	Database Migrations: Managed with Umzug.
	•	Testing: Basic tests and load testing with Artillery.

Project Structure
```
balance-app/
├── src/
│   ├── app.ts           
│   ├── migrate.ts       
│   ├── controllers/
│   │   └── userController.ts
│   ├── services/
│   │   └── userService.ts
│   ├── models/
│   │   ├── index.ts
│   │   └── user.ts
│   ├── migrations/
│   │   └── 1-create-user.ts
│   ├── middlewares/
│   │   └── validate.ts
│   └── validators/
│       └── index.ts
├── test/
│   ├── load-test.yml 
├── package.json
├── tsconfig.json
```
### Setup
1.	Install Dependencies:
```bash
npm install
```

2.	Configure PostgreSQL:  
```
Make sure PostgreSQL is running on your system and create a database (e.g., high_load_balance_app). Update the connection string in src/models/index.ts if needed.
```

### Running the Application

Start the application with:
```
npx tsx src/app.ts
```

The server will start on port 3000 (or the port specified in your environment variables).

### Testing

Unit & Integration Tests
	•	You can write tests using your preferred framework (Jest, Mocha, etc.).
	•	Sample tests are provided for the balance update endpoint.

### Load Testing with Artillery

The project includes an Artillery test script to simulate high load.

####How to Run Artillery Tests:
1.	Install Artillery (if not already installed):
```
npm install -g artillery
```

2.	Run the Test:
```
artillery run test/load-test.yml
```


##### Local Test Results

```
All VUs finished. Total time: 11 seconds

--------------------------------
Summary report @ 03:03:43(+0700)
--------------------------------

http.codes.200: ................................................................ 5000
http.codes.400: ................................................................ 5000
http.downloaded_bytes: ......................................................... 229445
http.request_rate: ............................................................. 1000/sec
http.requests: ................................................................. 10000
http.response_time:
  min: ......................................................................... 0
  max: ......................................................................... 31
  mean: ........................................................................ 0.8
  median: ...................................................................... 1
  p95: ......................................................................... 2
  p99: ......................................................................... 4
http.response_time.2xx:
  min: ......................................................................... 0
  max: ......................................................................... 9
  mean: ........................................................................ 1
  median: ...................................................................... 1
  p95: ......................................................................... 2
  p99: ......................................................................... 4
http.response_time.4xx:
  min: ......................................................................... 0
  max: ......................................................................... 31
  mean: ........................................................................ 0.7
  median: ...................................................................... 1
  p95: ......................................................................... 2
  p99: ......................................................................... 4
http.responses: ................................................................ 10000
vusers.completed: .............................................................. 10000
vusers.created: ................................................................ 10000
vusers.created_by_name.0: ...................................................... 10000
vusers.failed: ................................................................. 0
vusers.session_length:
  min: ......................................................................... 0.8
  max: ......................................................................... 40.8
  mean: ........................................................................ 1.7
  median: ...................................................................... 1.4
  p95: ......................................................................... 3.3
  p99: ......................................................................... 7.2
```