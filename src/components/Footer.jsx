function Footer() {
  return (
    <footer class="bg-gray-100 text-gray-700 p-4">
      <div class="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Subscription Box Shop. All rights reserved.</p>
        <p>
          Made on{' '}
          <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
            ZAPT
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;