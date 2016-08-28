# Seamless Client
Seamless client is the front end of the Seamless application.


## Features
  *TODO*


## Getting Started
this section describes common scripts that can be used.

  - continuously build and serve: `npm start`.
  - continuously test: `npm test`.
  - continuously document: `npm run docs`.
  - build app: `npm run build`.
  - test once: `npm run mocha`.
  - create docs: `npm run document`.
  - deploy app: `npm run deploy`.
  - update dependancies: `npm i`.


## Source Structure
this section describes the structure we will be using.

### components
  - Each folder in components will be a react component. each component will
    have its own stylesheet in the directory and imported into component.

### logic
  - Each folder in logic will encompass its own: actions, core, and
    reducer and possibly a lib directory (for heavy lifting).

### styles (STRICTLY FOR NONGENERATIVE STYLES)
  - Style mix-ins, variables and placeholder classes belong here. this is to
    avoid multiple imports of the same styles.


## Testing
testing will be conducted using the mocha, chai, jsdom and enzyme.
specs will be placed in the same directory as the code they are testing and
will be noted as '/spec.jsx?/'


## Application State
this section describes the application state we will be using.

  *TODO*


## Code Style
to maintain code style we will be using es-lint/scss-lint in combination with
their respective airbnb base configurations.


## Documentation
to generate documentation we are using esdocs. please see
[here](https://esdoc.org/tutorial.html). Also it is worth looking for a editor
plugin to help generate templates for docs (for atom try: atom-easy-jsdoc. it
doesnt work perfectly but atleast decent).
