# url-shortener
My implementation of the URL shortener API project from freeCodeCamp.

[See the app on Heroku]()

Implements the following User stories:
* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
* If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.
* When I visit that shortened URL, it will redirect me to my original link.

## Getting Started
```
npm install
node server.js
```

## Usage:
`http://localhost:8080/parser`

## Example output:
`{ "ip": "::1", "lang": "en-US", "os": "Linux 64" }`

Note: Example IP address is IPv6.

### Additional notes
* Since this was a fairly simple project, I experimented by adding jade and sass (using [node-sass-middleware](https://github.com/sass/node-sass-middleware)).
