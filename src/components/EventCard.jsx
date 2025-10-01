import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, IndianRupee, Tag } from 'lucide-react';

function EventCard({ event }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/event/${event.id}`)}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-5">

        {/* Category Badge */}
        <div className="flex items-center gap-1 mb-3">
          <Tag className="w-4 h-4 text-indigo-600" />
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            {event.category}
          </span>
        </div>



        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
          {event.title}
        </h3>
        

        {/* Details */}
        <div className="space-y-2 text-gray-600 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-sm">{new Date(event.date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}</span>
          </div>
          

           {/* location */}
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
            <span className="text-sm line-clamp-2">{event.location}</span>
          </div>
        </div>

        

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-1">
            <IndianRupee className="w-5 h-5 text-indigo-600" />
            <span className="text-2xl font-bold text-indigo-600">
              {event.price.toLocaleString('en-IN')}
            </span>
          </div>
          <button className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
            View Details →
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;