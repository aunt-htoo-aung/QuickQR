const express = require("express");
const QRCode = require("qrcode");
app = express();
app.use(express.json());

app.route("/api/v1/generate").get((req, res) => {
  const body = req.body;
  QRCode.toDataURL(
    body.data,
    { errorCorrectionLevel: "H" },
    function (err, url) {
      res.send(url);
    }
  );
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
