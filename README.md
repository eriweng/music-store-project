# Music Store

這是一個全端電子商務網站專案，模擬一個販售音樂專輯與活動票券的線上商店。前端使用 React 框架，後端則以 Node.js 和 Express 搭建，並整合了綠界科技 (ECPay) 的金流服務以處理支付流程。

## 主要功能

- **商品瀏覽**: 使用者可以瀏覽音樂專輯和即將舉行的活動。
- **購物車**: 支援新增、移除商品，並能即時更新購物車內容。
- **結帳流程**: 包含運送資訊表單以及完整的結帳體驗。
- **金流整合**: 透過 ECPay API 提供安全的支付選項（目前設定為測試模式）。
- **響應式設計**: 現代化的使用者介面，能適應不同尺寸的裝置。

## 技術棧

### 前端

- **框架**: [React](https://react.dev/) (v19) + [Vite](https://vitejs.dev/)
- **路由**: [React Router](https://reactrouter.com/) (v7)
- **樣式**: [Tailwind CSS](https://tailwindcss.com/)
- **UI 元件庫**: [Flowbite React](https://www.flowbite-react.com/)
- **圖示**: [Lucide React](https://lucide.dev/)
- **HTTP 客戶端**: [Axios](https://axios-http.com/)

### 後端

- **環境**: [Node.js](https://nodejs.org/)
- **框架**: [Express](https://expressjs.com/)
- **金流服務**: [綠界科技 ECPay](https://www.ecpay.com.tw/)
- **中介軟體**:
  - `cors`: 處理跨域資源共享。
  - `dotenv`: 管理環境變數。

### 開發工具

- `concurrently`: 同時運行前端與後端開發伺服器。
- `nodemon`: 在後端程式碼變更時自動重啟伺服器。

## 安裝與啟動

### 執行環境

- [Node.js](https://nodejs.org/) (建議版本 18.x 或以上)
- npm (通常會隨 Node.js 一起安裝)

### 安裝步驟

1.  **複製專案至本地**
    ```bash
    git clone <your-repository-url>
    cd music-store-project
    ```

2.  **安裝後端依賴套件**
    ```bash
    cd server
    npm install
    ```

3.  **安裝前端依賴套件**
    ```bash
    cd ../client
    npm install
    ```

### 環境變數設定

1.  在 `server` 資料夾中，建立一個名為 `.env` 的檔案。

2.  參考 `server/app.js`，在 `.env` 檔案中填入您的 ECPay **測試** 商店憑證：
    ```env
    MerchantID=YOUR_ECPAY_MERCHANT_ID
    HASH_KEY=YOUR_ECPAY_HASH_KEY
    HASH_IV=YOUR_ECPAY_HASH_IV
    ```

### 啟動應用程式

1.  回到專案的根目錄。

2.  執行以下指令，同時啟動前端與後端開發伺服器：
    ```bash
    npm run dev
    ```

3.  應用程式將在以下位址運行：
    - **前端**: `http://localhost:5173` (Vite 預設)
    - **後端**: `http://localhost:5000`

## API 端點

後端伺服器提供了以下 API：

- `GET /api/albums`: 取得所有音樂專輯的列表。
- `GET /api/events`: 取得所有活動的列表。
- `POST /create-order`: 建立一筆 ECPay 訂單，並回傳用於付款的 HTML 表單。
- `POST /api/payments/ecpay/callback`: 接收 ECPay 付款狀態更新的回呼端點。
- `GET /audios/:fileName`: 提供存放於 `public/audios` 資料夾中的音訊檔案。

## 專案結構

```
/
├── client/         # 前端 React 應用程式
│   ├── src/
│   └── ...
├── public/         # 存放共用的靜態資源 (如：音檔)
│   └── audios/
├── server/         # 後端 Node.js/Express 伺服器
│   ├── routes/     # 路由定義
│   ├── data/       # JSON 格式的模擬資料庫
│   ├── .env        # 環境變數 (需自行建立)
│   └── app.js      # 伺服器進入點
└── README.md
```
