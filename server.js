const express = require('express');
const path    = require('path');
const port    = process.env.PORT || 80;
const app     = express();



/**
 * serve assets statically if route recognised
 */
app.use(
  express.static(
    path.resolve(__dirname, 'build')
  )
);



/**
 * serve index always to support browserHistory on react-router
 */
app.get(

  '*', 

  (_, response) => response.sendFile(
    path.resolve(__dirname, 'build', 'index.html')
  )

);


/**
 * start server
 */
app.listen(port);
console.log(
  `serving on port: ${port}`
);
