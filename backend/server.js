const express = require("express");
const QRCode = require("qrcode");
const cors = require("cors");
app = express();
app.use(cors());
app.use(express.json());

app.route("/api/v1/generate").post((req, res) => {
  const body = req.body;
  QRCode.toDataURL(
    body.data.text,
    { ...body.data.option },
    function (err, url) {
      res.json({ qr: url });
    }
  );
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
