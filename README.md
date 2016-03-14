# api-header-parser
My implementation of the Header Parser API project from freeCodeCamp.

[See the app on Heroku](https://arcane-reef-31516.herokuapp.com/)

Implements the following User story:
*  I can get the IP address, language and operating system for my browser.

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
* [express-useragent](https://github.com/biggora/express-useragent) is used to get the operating system.
* Since this was a fairly simple project, I experimented by adding jade and sass (using [node-sass-middleware](https://github.com/sass/node-sass-middleware)).
