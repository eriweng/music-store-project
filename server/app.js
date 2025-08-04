// server's router center is here
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const albumsRouter = require("./routes/albums");
const eventsRouter = require("./routes/events");
const ECPayPayment = require("ecpay_aio_nodejs");

require("dotenv").config();
const options = {
  OperationMode: "Test",

  MercProfile: {
    MerchantID: process.env.MerchantID,

    HashKey: process.env.HASH_KEY,

    HashIV: process.env.HASH_IV,
  },

  IgnorePayment: [],

  IsProjectContractor: false,
};
console.log("MerchantID:", process.env.MerchantID);
const ecpayInstance = new ECPayPayment(options);
const port = 5000;

app.use(cors());

app.use(express.json());

// 當瀏覽器請求 public 資料夾裡的檔案時，Express 會直接回傳那些檔案，不需要額外寫路由。
// 例如：http://localhost:5000/logo.png 會自動回傳 /public/logo.png。
app.use(express.static(path.join(__dirname, "../public")));

// express.urlencoded() 會把 Content-Type: application/x-www-form-urlencoded 的請求 body 解析成 JavaScript 物件，讓你可以用 req.body 取得資料。
// { extended: true } 表示可以解析複雜的物件（巢狀結構），用的是 qs 套件。
app.use(express.urlencoded({ extended: true }));

// ✅ 使用路由：加上正確的前綴 "/api/albums"
app.use("/api/albums", albumsRouter);
app.use("/api/events", eventsRouter);

app.get("/", (req, res) => {
  res.send("ECPay OK");
});
app.post("/create-order", (req, res) => {
  try {
    const { MerchantTradeNo, TotalAmount, ItemName, TradeDesc, ReturnURL } =
      req.body;

    // 檢查必要欄位
    if (
      !MerchantTradeNo ||
      !TotalAmount ||
      !ItemName ||
      !TradeDesc ||
      !ReturnURL
    ) {
      return res.status(400).send("Missing required fields");
    }

    const MerchantTradeDate = new Date().toLocaleString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Taipei",
    });

    const base_param = {
      MerchantTradeNo,
      MerchantTradeDate,
      TotalAmount: String(TotalAmount),
      TradeDesc,
      ItemName,
      ReturnURL:
        "https://f5bdc34cc1fa.ngrok-free.app/api/payments/ecpay/callback",
      PaymentType: "aio",
      ChoosePayment: "ALL",
      EncryptType: 1,
    };
    console.log(base_param);

    const create = ecpayInstance.payment_client.aio_check_out_all(base_param);
    console.log("ECPay HTML form:", create);
    res.send(create);
  } catch (err) {
    console.error("ECPay create-order error:", err);
    res.status(500).send("ECPay create-order error");
  }
});

// 綠界付款結果通知（ReturnURL）API
app.post("/api/payments/ecpay/callback", (req, res) => {
  // 這裡可以記錄付款結果到資料庫，或做商業邏輯處理
  console.log("ECPay callback received:", req.body);

  // 綠界要求收到通知後要回傳 "1|OK"
  res.send("1|OK");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
