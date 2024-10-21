# PKI Cinema Booking Application
"PKI Cinema Booking Application" is my submission for a third year, fifth semester project for the subject "design and programming of user interfaces" at Singidunum University, Belgrade. 

All students attending were tasked to build a front-end prototype for a cinema booking application. This project uses Angular 18 in combination with the node package [json-server](https://www.npmjs.com/package/json-server) to simulate a back-end in a pinch.


## Setup & run

Make sure you have a newer version of node/npm installed, along with the Angular CLI tool.

1. Clone this repository: <br>
```git clone https://github.com/FilipRank/PKI_CinemaBookingApplication```
2. Once inside the directory, install the dependencies: <br>
`npm install`
3. Launch json-server: <br>
`npx json-server json-server/db.json` <br>
Json server will start on port 3000, if not occupied.
4. Serve the front-end with the angular CLI: <br>
`ng serve`
5. The front-end prototype application will be accessible at port 4200, if the port is free.
