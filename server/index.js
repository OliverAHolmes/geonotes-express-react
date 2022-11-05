// server/index.js

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();




// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api/:dataset", (req, res) => {
    const geoJSON = require('./GeoJSON/'+req.params.dataset+'.json')
    res.json(geoJSON);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});