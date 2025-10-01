import { Link } from 'react-router-dom';
import { ShoppingCart, Calendar } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

function Navbar() {
  const { cartCount } = useBooking();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-indigo-600 hover:text-indigo-700">
            <Calendar className="w-8 h-8" />
            <span>EventBLR</span>
          </Link>
          
          <Link to="/cart" className="relative">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold ">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;