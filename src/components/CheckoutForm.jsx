function CheckoutForm(props) {
  return (
    <form onSubmit={props.handleSubmit} class="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        value={props.name()}
        onInput={(e) => props.setName(e.target.value)}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={props.email()}
        onInput={(e) => props.setEmail(e.target.value)}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
        required
      />
      <textarea
        placeholder="Shipping Address"
        value={props.address()}
        onInput={(e) => props.setAddress(e.target.value)}
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
        required
      />
      <button
        type="submit"
        class={`w-full mt-4 bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 cursor-pointer ${
          props.processing() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={props.processing()}
      >
        {props.processing() ? 'Processing...' : 'Complete Purchase'}
      </button>
    </form>
  );
}

export default CheckoutForm;