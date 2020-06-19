var express = require('express');
var app = express();
var wol = require('wakeonlan');
var cors = require("cors");
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.post("/api/start", (req, res)=>{
  console.log("waking");
  wol("FC:AA:14:1F:9F:AB", (err) => {
    if (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
    else {
        res.sendStatus(204);
    }
}).catch((err) = {})
});


app.listen(5000);