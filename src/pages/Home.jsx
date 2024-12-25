import { Link } from '@solidjs/router';
import products from '../data/products';

function Home() {
  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-purple-600 mb-6">Available Subscription Boxes</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div class="bg-white rounded-lg shadow-md p-4">
            <img src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTVCJTI3ZGF0YS1pbWFnZS1yZXF1ZXN0JTI3JTVEfGVufDB8fHx8MTczNTExNzQzNnww&ixlib=rb-4.0.3&q=80&w=1080"
              
              alt={product.name}
              data-image-request={product['data-image-request']}
              class="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 class="text-xl font-semibold mt-4">{product.name}</h2>
            <p class="text-gray-700 mt-2">{product.description}</p>
            <p class="text-purple-600 font-bold mt-2">${product.price} / month</p>
            <Link
              href={`/product/${product.id}`}
              class="mt-4 inline-block bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 cursor-pointer"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;