import { useRef } from "react";

export default function MyComponent() {
  const buttonRef = useRef(null); // 建立 ref

  const handleClick = () => {
    if (buttonRef.current) {
      console.log("拿到的 DOM 元素是：", buttonRef.current);
      buttonRef.current.style.backgroundColor = "red"; // ✅ 可直接操作
    }
  };

  return (
    <div>
      <button ref={buttonRef} onClick={handleClick}>
        點我改顏色
      </button>
    </div>
  );
}
