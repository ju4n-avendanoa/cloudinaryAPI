# CloudinaryAPI

CloudinaryAPI is a RESTful API for managing media files using Cloudinary. It provides endpoints for uploading, retrieving, and deleting media files.

## Prerequisites

Before running the CloudinaryAPI, make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org) (v14 or higher)
- [MongoDB](https://www.mongodb.com) (running instance)
- [Cloudinary Account](https://cloudinary.com)

## Environment Variables

To configure the CloudinaryAPI, you need to set the following environment variables:

- `PORT`: The port number on which the server will run. The default value is `3000`.
- `MONGODB_URI`: The MongoDB connection URI.
- `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
- `CLOUDINARY_API_KEY`: Your Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.

## Installation

Follow the steps below to install and set up the CloudinaryAPI:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ju4n-avendanoa/cloudinaryAPI.git
   
2. Navigate to the project directory:

    ```bash
    cd cloudinaryAPI

3. Install the dependencies:

    ```bash
    npm install
    
4. Set the required environment variables according to your needs.

5. Start the server:

    ```bash
    npm start
    
By default, the server runs on port 3000. You can access the API at [http://localhost:3000](http://localhost:3000).

## API Endpoints

The following endpoints are available:

- `POST /upload`: Upload a media file to Cloudinary.
- `GET /media`: Retrieve a list of uploaded media files.
- `GET /media/:id`: Retrieve a specific media file by its ID.
- `DELETE /media/:id`: Delete a specific media file by its ID.

## Contributing

Contributions to the CloudinaryAPI are welcome and encouraged! If you have any improvements or bug fixes, feel free to submit a pull request. For major changes, please open an issue first to discuss the proposed changes.
