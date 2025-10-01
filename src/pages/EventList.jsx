import { useState } from 'react';
import { ArrowUpDown } from 'lucide-react';
import EventCard from '../components/EventCard';
import eventsData from '../data/event.json';

function EventList() {
  const [sortBy, setSortBy] = useState('date');
  
  const sortedEvents = [...eventsData].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Discover Events in <span className="text-indigo-600">Bangalore</span>
        </h1>
        <p className="text-gray-600">Find and book the best events happening in your city</p>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-lg shadow-md">
        <div className="flex items-center gap-2 text-gray-600">
          <ArrowUpDown className="w-5 h-5" />
          <span className="font-semibold">Sort by:</span>
        </div>
        
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border-2 border-gray-200 rounded-lg px-4 py-2 font-medium focus:border-indigo-500 focus:outline-none cursor-pointer"
        >
          <option value="date">Date</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Event Count */}
      <div className="text-center mt-8 text-gray-600">
        Showing <span className="font-bold text-indigo-600">{sortedEvents.length}</span> events
      </div>
    </div>
  );
}

export default EventList;