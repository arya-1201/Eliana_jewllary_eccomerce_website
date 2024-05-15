import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, increment, decrement } from '../CartSlice';

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
    otp: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const productItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeCartItem = (itemId) => {
    dispatch(remove(itemId));
  };

  const incrementQuantity = (itemId) => {
    dispatch(increment(itemId));
  };

  const decrementQuantity = (itemId) => {
    dispatch(decrement(itemId));
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleBuyNow = () => {
    setShowModal(!showModal);
 
    if (!showModal) {
      setFormData({
        name: '',
        mobile: '',
        email: '',
        address: '',
        otp: ''
      });
      setFormErrors({});
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
   
    if (name === 'mobile' && value.trim().length === 10) {
      const otp = Math.floor(100000 + Math.random() * 900000);
      setFormData((prevData) => ({ ...prevData, otp: otp.toString() }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!data.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(data.mobile)) {
      errors.mobile = 'Invalid mobile number';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    if (!data.otp.trim()) {
      errors.otp = 'OTP is required';
    }
    return errors;
  };

  const totalPrice = productItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {productItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {productItems.map((item) => (
            <div key={item.id} className="mb-4 p-4 border rounded-lg flex items-center justify-between">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md mr-4" />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.productDetails}</p>
                  <p className="text-gray-700">Price: ₹ {item.price * item.quantity}</p> 
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold px-3 py-1 rounded-l"
                  >
                    -
                  </button>
                  <span className="bg-gray-200 px-3 py-1">{item.quantity}</span>
                  <button
                    onClick={() => incrementQuantity(item.id)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold px-3 py-1 rounded-r"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeCartItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-semibold ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-8">
            <div>
              <p className="text-xl font-semibold">Total Price: ₹ {totalPrice}</p>
            </div>
            <button onClick={handleBuyNow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </>
      )}
      <div className="flex justify-between mt-8">
        <button onClick={handleBack} className="text-blue-500 hover:text-blue-700 font-semibold">
          Back to Page
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg w-96 p-8">
            <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${formErrors.name && 'border-red-500'}`}
                />
                {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${formErrors.mobile && 'border-red-500'}`}
                />
                {formErrors.mobile && <p className="text-red-500 text-sm mt-1">{formErrors.mobile}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                  className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${formErrors.otp && 'border-red-500'}`}
                />
                {formErrors.otp && <p className="text-red-500 text-sm mt-1">{formErrors.otp}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${formErrors.email && 'border-red-500'}`}
                />
                {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Residency Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="3"
                  className={`mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${formErrors.address && 'border-red-500'}`}
                />
                {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-bold py-2 px-4 rounded mr-4"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {submitted && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-8">
            <p className="text-xl font-semibold text-green-500">Order placed successfully!</p>
            <button onClick={() => setSubmitted(false)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
