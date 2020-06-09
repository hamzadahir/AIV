const express = require("express");

// Create the app

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server up on port ' + PORT)
});