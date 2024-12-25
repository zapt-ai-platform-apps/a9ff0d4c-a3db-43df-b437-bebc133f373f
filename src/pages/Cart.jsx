import { createSignal, onMount } from 'solid-js';
import { Link } from '@solidjs/router';

function Cart() {
  const [cartItems, setCartItems] = createSignal([]);

  onMount(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  });

  const removeItem = (index) => {
    const updatedCart = [...cartItems()];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const totalPrice = () => {
    return cartItems().reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-purple-600 mb-6">Your Cart</h1>
      {cartItems().length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems().map((item, index) => (
            <div class="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
              <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1579226905180-636b76d96082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw3fHxpdGVtJTVCJTI3ZGF0YS1pbWFnZS1yZXF1ZXN0JTI3JTVEfGVufDB8fHx8MTczNTExNzQzN3ww&ixlib=rb-4.0.3&q=80&w=1080"
                  
                  alt={item.name}
                  data-image-request={item['data-image-request']}
                  class="w-16 h-16 object-cover rounded-lg"
                />
                <div class="ml-4">
                  <h2 class="text-xl font-semibold">{item.name}</h2>
                  <p class="text-gray-700">${item.price} / month</p>
                </div>
              </div>
              <button
                onClick={() => removeItem(index)}
                class="text-red-500 hover:underline cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
          <div class="text-right mt-4">
            <p class="text-xl font-bold">Total: ${totalPrice()} / month</p>
            <Link
              href="/checkout"
              class="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 cursor-pointer"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;