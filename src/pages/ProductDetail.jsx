import { useParams, useNavigate } from '@solidjs/router';
import { createSignal } from 'solid-js';
import products from '../data/products';

function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = createSignal(null);
  const [loading, setLoading] = createSignal(false);

  // Find the product based on the id from the params
  const prod = products.find((p) => p.id === parseInt(params.id));
  setProduct(prod);

  const addToCart = () => {
    setLoading(true);
    // Implement add to cart functionality
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product());
    localStorage.setItem('cart', JSON.stringify(cart));
    setLoading(false);
    navigate('/cart');
  };

  return (
    <div class="container mx-auto p-4">
      {product() && (
        <div class="flex flex-col md:flex-row">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw0fHxwcm9kdWN0JTI4JTI5JTVCJTI3ZGF0YS1pbWFnZS1yZXF1ZXN0JTI3JTVEfGVufDB8fHx8MTczNTExNzQzNnww&ixlib=rb-4.0.3&q=80&w=1080"
            
            alt={product().name}
            data-image-request={product()['data-image-request']}
            class="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div class="md:ml-6 mt-4 md:mt-0">
            <h1 class="text-3xl font-bold text-purple-600">{product().name}</h1>
            <p class="text-gray-700 mt-4">{product().description}</p>
            <p class="text-purple-600 font-bold mt-4">${product().price} / month</p>
            <button
              onClick={addToCart}
              class={`mt-6 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 cursor-pointer ${
                loading() ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading()}
            >
              {loading() ? 'Adding to Cart...' : 'Add to Cart'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;