// server/index.js

const path = require('path');
var cors = require('cors')
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/:dataset", (req, res) => {
    const geoJSON = require('./GeoJSON/'+req.params.dataset+'.json')
    res.json(geoJSON);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});