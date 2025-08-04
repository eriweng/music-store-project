import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
// 自訂 hook，讓你在任何地方快速使用購物車資料
export function useCart() {
  return useContext(CartContext);
}
// 提供者元件（最外層把整個 App 包起來）
export function CartProvider({ children }) {
  // 這邊是初始化購物車狀態的時候，會先從 localStorage 讀取資料：
  // localStorage.getItem("cartItems") 會抓到一串字串。
  // 如果有資料，就轉回 JavaScript 陣列：JSON.parse(stored)
  // 如果沒有資料（第一次打開網站），就用空陣列 []。
  // 用箭頭函式 () => {} 是為了讓 useState 初始化時只執行一次。
  // 存入資料 - localStorage.setItem("key", "value");
  // 取出資料 - localStorage.getItem("key");
  // 移除資料 - localStorage.removeItem("key");
  const [cartItems, setCartItems] = useState(() => {
    const stored = localStorage.getItem("cartItems");
    return stored ? JSON.parse(stored) : [];
  });
  // 這邊是監控購物車狀態。每次 cartItems 有變化，就會執行這段程式：
  // 把最新的購物車內容轉成J字串，存進 localStorage 裡面
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // 把商品加入購物車邏輯
  function addToCart(item) {
    // console.log("呼叫購物車", item)
    // 「請把新商品加到舊的購物車陣列裡，並更新購物車狀態」
    setCartItems((prev) => {
      // console.log("購物車現有資料", prev);
      // 先檢查購物車內是否已有同一個商品（根據 id + option）
      // findIndex 只告訴我們那個項目的 index。 若沒能找到符合的項目，則會回傳 -1
      const existingItemIndex = prev.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.option === item.option
      );
      // console.log("找到的index", index);
      // 若已存在，直接更新數量 (-1 = false, not existing)
      if (existingItemIndex !== -1) {
        const updateCart = [...prev];
        updateCart[existingItemIndex].quantity += 1;
        console.log("更新後的購物車", updateCart);
        return updateCart;
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }

  // 把商品移除邏輯
  const removeFromCart = (id, option) => {
    setCartItems((prev) =>
      //  同 prev.filter((item)=> item.id !== id || item.option !== option))
      prev.filter((item) => !(item.id === id && item.option === option))
    );
  };

  const updateQuantity = (id, option, quantity) => {
    setCartItems((prev) => {
      const updated = [...prev];
      const index = updated.findIndex(
        (item) => item.id === id && item.option === option
      );
      if (index !== -1) {
        updated[index].quantity = quantity;
      }
      return updated;
    });
  };

  console.log(cartItems);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
