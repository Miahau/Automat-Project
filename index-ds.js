const express = require("express");

const { google } = require("googleapis");


const app = express();

app.get("/update", async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets",

    });
   // utworzenie instancji klienta do autoryzacji
const client = await auth.getClient();

const googleSheets = google.sheets({version: "v4", auth: "client" });


const spreadsheetId = "127Y_EOughRKFXniJ6Yh3x0OnamIYP9woLQFHavLnujM"
const getRows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "New Emails!H2",
})
res.send(getRows.data);
});
var cors = require('cors')
app.use(cors())
app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
})
app.listen(8000, (req, res) => console.log("Running"));
