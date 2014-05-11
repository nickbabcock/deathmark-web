# How to build and test

- Download and install [nodejs][]. Our build system is in javascript.
- Execute `npm install -g gulp`, analogous to what `make` is.
- In this repo, execute `npm install`. All the dependencies are now taken care
  of.
- Execute `gulp` to build the site, which will be built to the `bin` folder
- Navigate to the `bin` folder and start a simple webserver, for instance for
  python 2: `python -m SimpleHTTPServer` or for python 3: `python -m
  http.server`
- View site in browser
- Repeat

Alternatively, feel free just to edit whatever you want inplace, send a pull
request, and I can build it!

[nodejs]: http://nodejs.org/
~

