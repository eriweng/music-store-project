import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = Number(item.price);
    const qty = Number(item.quantity);
    return sum + price * qty;
  }, 0);
  console.log(totalPrice);

  return (
    <div className="cart container">
      <Header />
      <div className="sm-container-space lg:lg-container-space">
        <section className="your-cart-items bg-black text-white">
          <h1 className="text-xl mb-3">Your Cart</h1>
          <hr className="border-normal" />
          {cartItems.length === 0 ? (
            <p className="text-xl w-full mt-5 p-5 text-center ">
              Your cart is empty T^T
            </p>
          ) : (
            <>
              <ul className="">
                {cartItems.map((item, idx) => (
                  <>
                    <li key={idx} className="p-5">
                      <div className="flex justify-between">
                        <div className="flex gap-5">
                          <Link to={`/album/${item.id}`}>
                            <div className="album-img aspect-square">
                              <img
                                className="w-[100px] h-[100px] object-cover"
                                src={item.coverImage}
                                alt=""
                              />
                            </div>
                          </Link>
                          <div className="items-info flex flex-col items-start gap-2">
                            <span className="text-xl">{item.title}</span>
                            <span className="text-sm">{item.option}</span>
                            <div className="flex items-center gap-3">
                              <button
                                className="text-2xl p-2"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.option,
                                    item.quantity - 1
                                  )
                                }
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="text-md">{item.quantity}</span>
                              <button
                                className="text-2xl p-2"
                                onClick={() =>
                                  updateQuantity(
                                    item.id,
                                    item.option,
                                    item.quantity + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 justify-end items-end">
                          <span className="text-xl">
                            ${item.price * item.quantity}
                          </span>
                          <button
                            className="text-sm"
                            onClick={() => removeFromCart(item.id, item.option)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                    <hr className="border-t-normal" />
                  </>
                ))}
              </ul>
            </>
          )}
        </section>
        <section className="cart-total flex flex-col mt-[20px] justify-end text-white">
          <div className="ml-auto mb-10 p-5">
            <span className="total mr-5">TOTAL:</span>
            <span className="total-price text-xl">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <Link to="/shippingForm">
            <button
              className="for-checkout p-3 text-sm text-nowrap border-white border-normal transition-all lg:w-1/4 lg:ml-auto hover:bg-white hover:text-black active:font-black disabled:hover:bg-black disabled:hover:text-red-600"
              disabled={cartItems.length === 0}
            >
              CHECK OUT
            </button>
          </Link>
        </section>
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}
