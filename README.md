# Youtube Subscribers Backend

This project aims to create a backend API for managing YouTube subscribers using Node.js, Express.js, and MongoDB with Mongoose. It provides various endpoints to retrieve subscriber data, including subscriber lists, subscriber names, and access via specific IDs.

## MongoDB Schema Structure
#### Fields

 * name: String
 * subscribedChannel: String
 * subscribedDate: Date

## Features

* Retrieve all subscribers from a database hosted remotely.
* Retrieve specific data from the database using unique IDs.
* Access subscriber lists containing names and subscribed channels exclusively.
* Retrieve specific data from the database through designated routes.

## Technology/Languages Used
* Express.js
* MongoDB
* Mongoose
* HTML, CSS, JS for Docs Page

## How to Run Locally
To run this project locally, follow these steps:

1. Clone the repository:
####
    git clone https://github.com/parthpatil01/get-youtube-subscribers.git
    
2. Navigate to the project directory in your terminal.
####
    cd get-youtube-subscribers

4. Install dependencies:
####
    npm install
    
4. Start the server:
####  
    node index.js
    
5. Open any browser and visit:
####
    http://localhost:5000


## API Endpoints

* GET /subscribers: Retrieve all subscribers from the database.
* GET /subscribers/names: Retrieves list of subscriber names and their subscribed channels exclusively..
* GET /subscribers/:id: Retrieve specific subscriber data from the database using a unique ID.


## Deployment
This project is deployed and accessible at https://get-youtube-subscribers-nu.vercel.app
