import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function ShippingForm() {
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

  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price);
    const qty = Number(item.quantity);
    return sum + price * qty;
  }, 0);

  const [form, setForm] = useState({
    name: {
      firstName: "",
      lastName: "",
    },
    birthday: "",
    phone: "",
    email: "",
    address: "",
  });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:3001/create-shipping-order",
  //       form
  //     );
  //     alert("訂單已建立，物流單號：" + res.data.AllPayLogisticsID);
  //   } catch (err) {
  //     console.error(err);
  //     alert("建立訂單失敗");
  //   }

  return (
    <div className="shipping-form">
      <header className="bg-black px-[2rem] py-[1.5rem]">
        <Link to="/">
          <div id="header-brandLogo" className="w-[150px]">
            <img src="/assets/RanVin_wh.png" alt="brandLogo" />
          </div>
        </Link>
      </header>

      <div className="sm-container-space lg:lg-container-space px-[1rem]">
        <div className="p-5 shadow-xl">
          <section className="your-cart-items text-black h-full text-center">
            <span className="w-2 h-2 border- rounded"></span>
            <h1 className="text-xl mb-5">--- Checkout List ---</h1>
            <hr className="border-black" />
            <ul>
              {cartItems.map((item, idx) => (
                <>
                  <li key={idx} className="p-5">
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
                </>
              ))}
            </ul>
          </section>
          <section className="cart-total flex flex-col mt-[20px] justify-end text-black">
            <div className="ml-auto mb-10 p-5">
              <span className="total mr-5">TOTAL:</span>
              <span className="total-price text-xl">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <Link to="/cart">
              <button className="for-return text-md text-nowrap transition-all m-auto hover:font-semibold">
                Return
              </button>
            </Link>
          </section>
        </div>
        <form
          // onSubmit={handleSubmit}
          className="max-w-md mx-auto p-4 border rounded-lg mt-10"
        >
          <div className="sm-container-space lg:lg-container-space">
            <section className="cart-total flex flex-col mt-[20px] justify-end text-white">
              <div className="ml-auto mb-10 p-5">
                <span className="total mr-5">TOTAL:</span>
                <span className="total-price text-xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button
                className="for-checkout p-3 text-sm text-nowrap border-white border-normal transition-all lg:w-1/4 lg:ml-auto hover:bg-white hover:text-black active:font-black disabled:hover:bg-black disabled:hover:text-red-600"
                disabled={cartItems.length === 0}
              >
                CHECK OUT
              </button>
            </section>
          </div>
          <h2 className="text-xl font-bold mb-4">宅配資訊</h2>

          <label>
            姓名：
            <input
              type="text"
              value={form.name}
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
            地址：
            <input
              type="text"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="block w-full mb-4 p-2 border"
            />
          </label>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            送出訂單
          </button>
        </form>
      </div>
    </div>
  );
}
