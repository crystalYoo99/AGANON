const express = require('express');
const path = require('path');
const router = require("./routers/router.js");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'src/')));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});