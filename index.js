/* eslint-disable @typescript-eslint/no-var-requires */

const express = require('express');

const { PORT = 9000 } = process.env;
const app = express();

app.use(express.static(__dirname + '/build'));
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
