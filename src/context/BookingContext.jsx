import { createContext, useState, useContext } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // initialize cart from localstorage or empty array to give better ux to our user 
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('bookingCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (event) => {
    // checking if the cart is already in cart or not
    if (cart.find(item => item.id === event.id)) {
      alert('Event already in cart!');
      return;
    }
    const updatedCart = [...cart, event];
    setCart(updatedCart);

    // save event to cart using localstorage
    localStorage.setItem('bookingCart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (eventId) => {
    const updatedCart = cart.filter(item => item.id !== eventId);
    setCart(updatedCart);
    // after removing update the local stoarege
    localStorage.setItem('bookingCart', JSON.stringify(updatedCart));
  };

  

  // calculatee total amount 
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const cartCount = cart.length

  return (
    <BookingContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      totalAmount,
      cartCount
    }}>
      {children}
    </BookingContext.Provider>
  );
};

// Custom hook to use booking context
export const useBooking = () => useContext(BookingContext);
 
