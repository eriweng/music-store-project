import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import FooterWhiteTheme from "../components/layout/FooterWhiteTheme";
import axios from "axios";

export default function ShippingForm() {
  // 🐝 進入此頁時，設定背景與排版樣式；離開時還原。
  useEffect(() => {
    document.getElementById("root").classList.add("white-root");
    document.getElementById("root").classList.add("noPaddingTop");
    document.body.classList.add("white-theme");
    return () => {
      document.getElementById("root").classList.remove("white-root");
      document.getElementById("root").classList.add("noPaddingTop");
      document.body.classList.remove("white-theme");
    };
  }, []);

  // 🐝 取得購物車內容，並計算所有商品的總價。
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  // 這段程式碼是計算購物車裡所有商品的「單價 × 數量」後加總得到購物車的總價錢。
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price);
    const qty = Number(item.quantity);
    return sum + price * qty;
  }, 0);
  // 🐝 管理使用者填寫的宅配資訊。
  const [form, setForm] = useState({
    name: {
      firstName: "Eri",
      lastName: "Weng",
    },
    birthday: "1992-03-07",
    phone: "0493991348",
    email: "eriweng@gmail.com",
    address: "xxxxxxxx",
    postcode: "3030",
  });

  // 🐝 送出訂單資料到後端 /create-order，後端產生綠界付款表單（含正確 CheckMacValue），前端收到後自動插入並送出，導向綠界付款頁。
  const handleDeliverySubmit = async (e) => {
    e.preventDefault();
    const orderData = {
      orderId: "T" + Date.now(),
      total: Math.round(totalPrice),
      itemName: cartItems
        .map((i) => `${i.title}.${i.option} x ${i.quantity}`)
        .join("#"),
    };
    console.log(orderData);
    const res = await axios.post("http://localhost:5000/create-order", {
      MerchantTradeNo: orderData.orderId,
      TotalAmount: orderData.total,
      ItemName: orderData.itemName,
      TradeDesc: "TestOrder",
      ReturnURL:
        "https://1866f595eb7a.ngrok-free.app/api/payments/ecpay/callback",
    });
    // 🐝 在這裡 console.log 新的 HTML 表單
    console.log("ECPay HTML form:", res.data);

    // 🐝 將後端回傳的 HTML 表單插入頁面並自動送出
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = res.data;
    document.body.appendChild(tempDiv);
    tempDiv.querySelector("form").submit();
  };

  // // 從 localStorage 讀出資料，填入綠界表單 hidden input
  // useEffect(() => {
  //   if (order) {
  //     // 填入綠界表單資料
  //     document.querySelector("input[name='MerchantTradeNo']").value =
  //       order.orderId;
  //     document.querySelector("input[name='TotalAmount']").value = order.total;
  //     document.querySelector("input[name='ItemName']").value = order.itemName;

  //     // 送出綠界表單
  //     let test = document.getElementById("ecpay-form");
  //     console.log(test);
  //     document.getElementById("ecpay-form").submit();
  //   }
  // }, [order]);

  return (
    <div className="shipping-form">
      <header className="bg-black px-[2rem] py-[1.5rem]">
        <Link to="/">
          <div id="header-brandLogo" className="w-[150px]">
            <img src="/assets/RanVin_wh.png" alt="brandLogo" />
          </div>
        </Link>
      </header>
      <div className="sm-container-space lg:lg-container-space px-[1rem] flex flex-col gap-8 md:flex-row md:justify-between md:gap-4 md:align-top">
        {/* 訂單明細 */}
        <div className="w-full h-full p-5 shadow-xl">
          <section className="your-cart-items flex flex-col text-black h-full text-center">
            <span className="w-2 h-2 border- rounded"></span>
            <h1 className="text-2xl font-normal tracking-wide	mt-2 mb-8">
              --- Checkout List ---
            </h1>
            <hr className="border-black" />
            <ul>
              {cartItems.map((item, idx) => (
                <React.Fragment key={item.id || idx}>
                  <li className="p-5">
                    <div className="flex justify-between">
                      <div className="flex gap-5">
                        {/* <Link to={`/album/${item.id}`}> */}
                        <div className="album-img aspect-square">
                          <img
                            className="w-[100px] h-[100px] object-cover"
                            src={item.coverImage}
                            alt=""
                          />
                        </div>
                        {/* </Link> */}
                        <div className="items-info flex flex-col items-start gap-2">
                          <span className="text-xl">{item.title}</span>
                          <span className="text-sm">{item.option}</span>
                          <div className="flex items-center gap-3 mt-auto">
                            <span className="text-md">
                              {item.quantity} x ${item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 justify-end items-end">
                        <span className="text-xl">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </li>
                  <hr className="border-black" />
                </React.Fragment>
              ))}
            </ul>
          </section>
          <section className="cart-total-price flex flex-col mt-[20px] justify-end text-black">
            <div className="flex justify-between mb-10 p-5">
              <Link to="/cart">
                <button className="for-return text-md align-middle text-nowrap transition-all mr-auto hover:bg-black hover:text-white hover:px-2">
                  Return
                </button>
              </Link>
              <div>
                <span className="total mr-5">TOTAL:</span>
                <span className="total-price text-xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </section>
        </div>
        {/* 宅配單 */}
        <form className="flex flex-col w-full mx-auto p-4 border-black border-normal">
          <h2 className="text-2xl font-normal text-left tracking-wide mt-2 mb-8">
            Delivery Info
          </h2>
          <label>
            First Name：
            <input
              type="text"
              value={form.name.firstName}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="block w-full mb-2 p-2 border"
            />
          </label>
          <label>
            Last Name：
            <input
              type="text"
              value={form.name.lastName}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="block w-full mb-2 p-2 border"
            />
          </label>
          <label>
            生日：
            <input
              type="text"
              value={form.birthday}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="block w-full mb-2 p-2 border"
            />
          </label>
          <label>
            電話：
            <input
              type="text"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="block w-full mb-2 p-2 border"
            />
          </label>
          <label>
            Email：
            <input
              type="text"
              value={form.email}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="block w-full mb-2 p-2 border"
            />
          </label>
          <label>
            地址：
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="block w-full mb-4 p-2 border"
            />
          </label>
          <label>
            Postcode：
            <input
              type="text"
              value={form.postcode}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="block w-full mb-4 p-2 border"
            />
          </label>
          <button
            onClick={handleDeliverySubmit}
            type="submit"
            className="bg-black text-white text-nowrap px-4 py-2 max-w-1/4 ml-auto"
          >
            Submit !
          </button>
        </form>
      </div>
      <FooterWhiteTheme />
    </div>
  );
}
