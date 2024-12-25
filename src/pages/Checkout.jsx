import { createSignal } from 'solid-js';
import CheckoutForm from '../components/CheckoutForm';
import SuccessMessage from '../components/SuccessMessage';

function Checkout() {
  const [name, setName] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [address, setAddress] = createSignal('');
  const [processing, setProcessing] = createSignal(false);
  const [success, setSuccess] = createSignal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    // Implement checkout logic here
    // For now, we'll simulate a successful checkout
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      localStorage.removeItem('cart');
    }, 2000);
  };

  return (
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold text-purple-600 mb-6">Checkout</h1>
      {success() ? (
        <SuccessMessage />
      ) : (
        <CheckoutForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
          processing={processing}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Checkout;