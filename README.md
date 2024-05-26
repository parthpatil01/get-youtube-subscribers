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
* Fetch all subscribers from a remotely hosted database.

## Technology/Languages Used
* Express.js
* MongoDB
* Mongoose
* HTML, CSS, JS for Docs Page

## How to Run Locally
To run this project locally, follow these steps:

* Clone the repository:
####
    git clone https://github.com/ankit-devhub/youtube-subscribers-backend.git
    
* Navigate to the project directory in your terminal.

* Install dependencies:

####
    npm install
* Start the server:
####  
    node index.js
* Open any browser and visit:
####
    localhost:000

## Deployment
This project is deployed and accessible at https://get-youtube-subscribers-nu.vercel.app
