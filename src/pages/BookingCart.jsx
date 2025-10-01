import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Trash2, IndianRupee, Calendar, MapPin, Ticket, CreditCard } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

function BookingCart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, totalAmount } = useBooking();

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8 text-lg">Discover amazing events happening in Bangalore</p>
          <button
            onClick={() => navigate('/')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-all font-semibold shadow-lg hover:shadow-xl"
          >
            Browse Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center gap-3">
          <ShoppingCart className="w-10 h-10 text-indigo-600" />
          Your Booking Cart
        </h1>
        <p className="text-gray-600">Review your selected events before checkout</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(event => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex gap-4">
                {/* Event Image */}
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-32 h-32 object-cover rounded-lg"
                />
                
                {/* Event Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}</span>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <IndianRupee className="w-5 h-5 text-indigo-600" />
                      <span className="text-2xl font-bold text-indigo-600">
                        {event.price.toLocaleString('en-IN')}
                      </span>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(event.id)}
                      className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-xl shadow-xl p-6 sticky top-24">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Ticket className="w-6 h-6" />
              Order Summary
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-lg">
                <span>Items:</span>
                <span className="font-semibold">{cart.length} event{cart.length > 1 ? 's' : ''}</span>
              </div>
              
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xl font-semibold">Total Amount:</span>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="w-6 h-6" />
                    <span className="text-3xl font-bold">
                      {totalAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full bg-white text-indigo-600 py-4 rounded-lg text-lg font-bold hover:bg-gray-50 transition-all shadow-lg flex items-center justify-center gap-2">
              <CreditCard className="w-5 h-5" />
              Proceed to Checkout
            </button>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingCart;