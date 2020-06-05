const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

// App initialization
const app = express();
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});
