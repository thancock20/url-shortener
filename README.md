# url-shortener
My implementation of the URL shortener API project from freeCodeCamp.

[See the app on Heroku](https://sh-url.herokuapp.com)

Implements the following User stories:
* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
* If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
* When I visit that shortened URL, it will redirect me to my original link.

## Getting Started
```
npm install
node server.js
```

## Example Usage (New Short URL):
`http://localhost:8080/new/http://www.google.com`

## Example Output:
`{ "original_url": "http://www.google.com", "short_url": "http://localhost:8080/1" }`

## Usage:
`http://localhost:8080/1`

## Will Redirect To:
`http://www.google.com`
