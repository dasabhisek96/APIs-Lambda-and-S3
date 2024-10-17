Project Overview
------------------

This project is a basic web service that allows users to store and retrieve JSON data using AWS S3. It consists of a Node.js backend and an Angular frontend that interact with AWS S3 through API endpoints to store and retrieve JSON files.

Features
-----------------
POST Endpoint: Store JSON data as files in an S3 bucket.
GET Endpoint: Retrieve all stored JSON data from the S3 bucket.
Frontend: Simple Angular interface to upload JSON and fetch stored data.


Project Structure
------------------

Backend (backend/)
app.js: Sets up the Express.js server and includes middleware for handling routes and body parsing.
controllers/apiController.js: Contains logic for storing and retrieving JSON data from AWS S3.
routes/apiRoutes.js: Defines the API routes (POST /store and GET /retrieve).
services/s3Service.js: Interacts with AWS S3 to upload and fetch JSON data.

Frontend (frontend/)
app/services/api.service.ts: Handles API communication between the frontend and backend.
app/components/upload-json: Provides a simple UI to upload JSON data and display results from the API.

Thought Process
----------------

Problem Breakdown
------------------


Set Up AWS Resources:
----------------------

Created an S3 bucket to store JSON data.
Configured API Gateway to expose two endpoints: POST for storing and GET for retrieving data.

POST Endpoint (Node.js):
--------------------------

When a user submits valid JSON data, it is uploaded as a new file to the S3 bucket.
The S3 service responds with an eTag (unique identifier) and the file URL, which are returned to the user.
This allows users to easily reference the stored data via the returned S3 URL.

GET Endpoint (Node.js):
-------------------------

This endpoint lists all files stored in the S3 bucket and compiles the contents of each file into an array.
The combined JSON data is returned to the client, so all stored entries are available in a single response.

Frontend (Angular):
------------------------

The frontend allows users to enter JSON data via a text area and submit it to the backend API using the POST /store endpoint.
Once uploaded, the frontend displays the S3 URL and eTag to confirm successful storage.
Future enhancements could include displaying all stored data using the GET /retrieve endpoint.

Error Handling:
---------------
The backend validates the incoming JSON data and returns appropriate error messages for invalid requests.
AWS S3 errors (like access issues or file upload failures) are caught and handled with meaningful error responses to the client.

Challenges:
------------
AWS Integration: Using the AWS SDK to upload and retrieve files required ensuring the correct IAM policies were set for the S3 bucket.
Serverless Consideration: Although the backend is implemented with Express.js, it could easily be adapted to run in AWS Lambda functions, allowing for a serverless architecture.

Running the Project
----------------

Backend Setup
----------------
Install dependencies:
------------------

npm install

Configure AWS credentials:
-------------------------------

Ensure your AWS credentials (with permissions for S3) are set up using the AWS CLI or environment variables.

Run the server:
------------------

node app.js


Frontend Setup
-------------------

Install dependencies:
-------------------
npm install

Run the frontend:
-----------------

ng serve



API Endpoints
----------------------

POST /api/store
-----------------

Description: Stores JSON data in an S3 bucket.
Request: JSON body payload.
Response: Returns the eTag and S3 URL for the stored file

GET /api/retrieve
---------------------
Description: Fetches all JSON files from the S3 bucket.
Response: Returns an array of all stored JSON data.
Example Response:


Future Enhancements
--------------------
Add pagination and filtering options to the GET endpoint for large data sets.
Extend the frontend to display all stored JSON files.
Implement serverless Lambda functions to remove the need for an Express.js server.