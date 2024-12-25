import { Link } from '@solidjs/router';

function Navbar() {
  return (
    <nav class="bg-purple-600 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <Link href="/" class="text-2xl font-bold">
          Subscription Box Shop
        </Link>
        <div>
          <Link href="/cart" class="hover:underline flex items-center">
            <svg class="h-6 w-6 mr-1" fill="currentColor" viewBox="0 0 24 24">
              {/* Shopping cart icon */}
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;