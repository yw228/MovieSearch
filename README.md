MovieSearch


Before the project make sure you have node.js install

and run npm install at frontend/my-vue-project


to run backend server go to frontend/my-vue-project/webservice

run node server.js


to run the front end g to frontend/my-vue-project

run npm serve


Overview
This may be the first time you will be using some (if not all) of these technologies/frameworks. This challenge will be used to compare how you develop against the other applicants for this position at this time. This may mean that we are looking deep into your technical skills, your understanding of best practices or it may mean that we are looking at how well you can follow the instructions listed here. Please DO NOT exceed 4 hours for this challenge. If you exceed 4 hours, your code may not be reviewed.

You will be building a movie lookup application. Build a basic back-end web service that will call an external API, and return a simplified JSON response of the data received back from the API. You will also build a simple front-end web page that will consume your back-end web service and display the results to the browser.

The remainder of this document contains requirements for the project and suggestions of frameworks and tools we use consistently that you may find helpful.

Requirements
Create a Simple Web Application
Search for movies by a title and display up to 10 of the search results on the page.
The web page needs to call your own back-end web service, which will in turn call The Movie Database (TMDB) API to find search results.
TMDB API returns a lot of movies and a lot of extra information that you won't need. Your back-end will need to filter that information as well as combine a few fields before returning the data to your web page.
Your web page will then need to display the results in a simple but readable way.
Separation of Systems
Separate the front-end system from the back-end system.
All communication between the two should be through a REST API.
The backend should remove as much logic as possible from the front-end.


Back-End Requirements
Write in NodeJS using an embedded web server such as Express.

Single endpoint must adhere to the following API spec:

Request: GET ..../movies?search={title}

Response:

[
{
"movie_id": integer,
"title": string,
"poster_image_url": string,
"popularity_summary": string
},
...
]


json
Copy code
[
{
"movie_id": integer,
"title": string,
"poster_image_url": string,
"popularity_summary": string
},
...
]
Must call the search movies endpoint in TMDB API.

Use the response from TMDB API to construct the above response (i.e. set the "movie_id" and "title" fields to the same fields returned in TMDB API response, use the "poster_image_url" from TMDB API response to construct a FQDN URL to return in your back-end, etc.).

Recommendations
Use a main method to start an embedded server on localhost for ease of testing.
It may be helpful to define the API specifications first using a service like Postman.
Include unit tests using a framework like Mocha.
Front-End Requirements
Write the front end using Vue.js using a framework like Nuxt to build a base project.
Must have a search input field and a search button that calls your web service.
Must display the search results for each movie returned from your web service:
Title
Image of the poster
Popularity summary
Recommendations
Use good web design.
Flexbox can be used to order the results simply without over complicating the styling.
Deliverable
Set up a single public GitHub repository with two folders: "webapp" and "webservice".
The "webapp" folder should include all the files necessary to run the web page.
The "webservice" folder should include all the files necessary to run the back-end.
Include a README with instructions about how to run your front-end and back-end.
In the README feel free to include anything else about this challenge (i.e. what you would include in future versions of this movie search app, screenshots, etc.).
Once again, we understand that this is a large assignment and we have given you a limited amount of time. Please do the best with what you have.

When you have completed this challenge, respond back through the email that sent you this challenge with a link to your public GitHub repository.

Notes
The Recommendations are not required but could help you with this challenge. Frameworks and technologies in the Recommendations sections are ones that we are currently using in our projects.
To use TMDB API, you'll need to sign up for a free account.
Once created you will have access to an API key which you will include in your HTTP request to the search movie endpoint as a query param, remember to think about security around credentials.
Follow the Getting Started section in TMDB API docs. We recommend not including the API directly in your code, but perhaps add it to a properties or env file.
TMDB search movie endpoint has a few query parameters.
Make sure to keep the "include_adult" query param to "false."
Even still, be careful what you search for in TMDB, because even with the "include_adult" field set to "false" you may run across a few inappropriate movies or inappropriate poster images.
The "language" param can be set to "en-US" and the "region" param can be set to "US" to reduce the number of search results.
Feel free to embellish this challenge a little bit. Make it yours. Make it showcase some of your strengths, but do not feel this is necessary.