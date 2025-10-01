import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import BookingCart from './pages/BookingCart';

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/cart" element={<BookingCart />} />
          </Routes>
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;