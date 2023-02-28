const express = require('express');
const PORT = 3001

// Router
const {FileRouter} = require("./modules/file")

const app = express();
app.use(express.json());

app.use('/files', FileRouter)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
