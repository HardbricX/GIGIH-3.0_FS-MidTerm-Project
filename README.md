## Tokopedia Play Clone - Backend

This repository contains the backend code for the Tokopedia Play Clone project, a video sharing platform where users can watch videos and explore products related to the videos.

### Database Structure

The backend uses MongoDB as the database to store information about videos, products, and comments. The database schema is as follows:

#### Videos Collection

- `title` (String, required): The title of the video.
- `description` (String, required): A brief description of the video.
- `thumbnail_url` (String, required): URL of the video thumbnail image.
- `youtube_url` (String, required): URL of the YouTube video.

#### Products Collection

- `video_id` (ObjectId, required): Reference to the video that the product is related to.
- `name` (String, required): The name of the product.
- `price` (Number, required): The price of the product.
- `description` (String): A brief description of the product.

#### Comments Collection

- `video_id` (ObjectId, required): Reference to the video that the comment is related to.
- `user_name` (String, required): Name of the user who submitted the comment.
- `comment_text` (String, required): The content of the comment.

### API Structure

The backend follows RESTful principles to design the API. It provides endpoints to interact with videos, products, and comments. The main API endpoints are as follows:

- `GET /api/videos`: Get a list of videos with minimal details (id, title, thumbnail_url).
- `GET /api/videos/:id`: Get detailed information about a specific video.
- `GET /api/videos/:id/products`: Get products related to a video.
- `GET /api/videos/:id/comments`: Get comments for a specific video.
- `POST /api/videos/:id/comments`: Add a new comment for a video.

### API Request and Response

You can find detailed examples of API request and response formats in this [Gist](https://gist.github.com/HardbricX/4c2392348601d5796ef8ce8acb7f37e1). The Gist provides examples of various API calls, including how to fetch video lists, get video details, retrieve products, fetch comments, and add new comments.

### How to Run in Local

To run the API in your local environment, follow these steps:

1. Clone the repository from GitHub.
2. Install the required dependencies using `npm install`.
3. Ensure you have MongoDB installed and running on your local machine.
4. Set up the database with the necessary collections and fields (as described in the Database Structure section).
5. Start the backend server using `npm start`.

Once the server is running, you can make API requests to `http://localhost:3000` to interact with the Tokopedia Play Clone backend.

Please make sure to install the required dependencies and set up the database correctly so that the grader can run the API on their local machine following these instructions.

---
