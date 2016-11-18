# Seamless Client
Seamless client is the front end of the Seamless application.

## Getting Started
this section describes common scripts that can be used.

  - continuously build and serve: `npm start`.
  - continuously test: `npm test`.
  - continuously document: `npm run doc`.
  - build app: `npm run build`.
  - test once: `npm run test:once`.
  - create docs: `npm run doc:once`.
  - deploy app: `npm run deploy`.
  - update dependancies: `npm i`.

## Source Structure
this section describes the structure we will be using.

### views
  - Each folder in components will be a react component. each component will
    have its own stylesheet in the directory and imported into component.

### logic
  - Each folder in logic will encompass its own: actions, core, and
    reducer and possibly a lib directory (for heavy lifting).

## Testing
testing will be conducted using the avajs, jsdom and enzyme.
specs will be placed in the same directory as the code they are testing and
will be noted as '/spec.jsx?/'

## Code Style
to maintain code style we will be using es-lint/scss-lint in combination with
their respective airbnb base configurations.

## Documentation
to generate documentation we are using esdocs. please see
[here](https://esdoc.org/tutorial.html). Also it is worth looking for a editor
plugin to help generate templates for docs (for atom try: atom-easy-jsdoc. it
doesnt work perfectly but atleast decent).
