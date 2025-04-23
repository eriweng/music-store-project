export default function Cart() {
  const cartItems =[
    { id: 1, title: 'Track 1', price: 10 },
    { id: 2, title: 'Track 2', price: 12 }
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price)

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
      {cartItems.map(item => {
        <li key={item.key}>
          <p>{item.title} - ${item.price}</p>
          </li>
      })}
      </ul>
      <hr />
      <p>Total: ${total}</p>
      <button>Checkout</button>
    </div>
  )
}

