import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, IndianRupee, Tag, Ticket } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import eventsData from '../data/event.json';

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cart } = useBooking();
  
  const event = eventsData.find(e => e.id === parseInt(id));
  const isInCart = cart.some(item => item.id === event?.id);

  if (!event) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-gray-800">Event not found</h2>
      </div>
    );
  }

  const handleBookNow = () => {
    addToCart(event);
    navigate('/cart');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-indigo-600 mb-6 hover:text-indigo-700 font-semibold"
      >
        <ArrowLeft className="w-5 h-5" />
        Back to Events
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Event Image */}
        <div className="h-80 overflow-hidden">
          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full">
              {event.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{event.title}</h1>
          
          {/* Event Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Date */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <Calendar className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Date & Time</p>
                <p className="font-semibold text-gray-800">
                  {new Date(event.date).toLocaleDateString('en-IN', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
              <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
              <div>
                <p className="text-sm text-gray-600 mb-1">Location</p>
                <p className="font-semibold text-gray-800">{event.location}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="border-t pt-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Ticket className="w-6 h-6 text-indigo-600" />
              About This Event
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
          </div>

          {/* Price & Book Button */}
          <div className="flex items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
            <div>
              <p className="text-sm text-gray-600 mb-1">Ticket Price</p>
              <div className="flex items-center gap-2">
                <IndianRupee className="w-8 h-8 text-indigo-600" />
                <span className="text-4xl font-bold text-indigo-600">
                  {event.price.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={handleBookNow}
              disabled={isInCart}
              className={`flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg ${
                isInCart 
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                  : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-xl'
              }`}
            >
              <Ticket className="w-6 h-6" />
              {isInCart ? 'Already in Cart' : 'Book Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;