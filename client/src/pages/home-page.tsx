import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router';

const CITIES = ['Guwahati', 'Baihata Chariali', 'Mangaldai'];

const ROOMS = [
  { id: 1, title: 'Sunrise PG for Men', city: 'Guwahati', price: 8000, gender: 'Male', type: 'PG', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop' },
  { id: 2, title: 'Green Valley Hostel', city: 'Baihata Chariali', price: 6500, gender: 'Female', type: 'PG', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=300&fit=crop' },
  { id: 3, title: 'Cozy 1BHK near Metro', city: 'Baihata Chariali', price: 15000, gender: 'Any', type: 'Room', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop' },
  { id: 4, title: 'Urban Nest Co-living', city: 'Baihata Chariali', price: 9500, gender: 'Any', type: 'PG', image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=400&h=300&fit=crop' },
  { id: 5, title: 'Lakeview Ladies PG', city: 'Guwahati', price: 7200, gender: 'Female', type: 'PG', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=300&fit=crop' },
  { id: 6, title: 'Spacious 2BHK Flat', city: 'Mangaldai', price: 18000, gender: 'Any', type: 'Room', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop' },
  { id: 7, title: 'Tech Park Boys Hostel', city: 'Mangaldai', price: 7800, gender: 'Male', type: 'PG', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=400&h=300&fit=crop' },
  { id: 8, title: 'Premium Studio Room', city: 'Mangaldai', price: 12000, gender: 'Any', type: 'Room', image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&h=300&fit=crop' },
];

const PRICE_RANGES = [
  { label: 'Any price', min: 0, max: Infinity },
  { label: 'Under ₹8,000', min: 0, max: 8000 },
  { label: '₹8,000 - ₹12,000', min: 8000, max: 12000 },
  { label: '₹12,000 - ₹18,000', min: 12000, max: 18000 },
  { label: 'Above ₹18,000', min: 18000, max: Infinity },
];

const GENDER_OPTIONS = ['Any', 'Male', 'Female'];
const TYPE_OPTIONS = ['Any', 'PG', 'Room'];

export const HomePage = () => {
  const [city, setCity] = useState('Guwahati');
  const [priceRange, setPriceRange] = useState(PRICE_RANGES[0]);
  const [gender, setGender] = useState('Any');
  const [roomType, setRoomType] = useState('Any');
  const [showFilters, setShowFilters] = useState(false);

  const filteredRooms = useMemo(() => {
    return ROOMS.filter((room) => {
      if (room.city !== city) return false;
      if (room.price < priceRange.min || room.price > priceRange.max) return false;
      if (gender !== 'Any' && room.gender !== 'Any' && room.gender !== gender) return false;
      if (roomType !== 'Any' && room.type !== roomType) return false;
      return true;
    });
  }, [city, priceRange, gender, roomType]);

  return (
    <div className="min-h-screen bg-zinc-900 ">
      {/* Top bar: city selector */}
      <div className="sticky top-0 z-10  border-b border-gray-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <div className="flex items-center gap-2 flex-1 sm:flex-none">
            <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-gray-800 text-gray-100 text-sm font-medium rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1 sm:flex-none"
            >
              {CITIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Mobile filter toggle */}
          <button
            onClick={() => setShowFilters((s) => !s)}
            className="sm:hidden flex items-center gap-1.5 bg-gray-800 text-gray-100 text-sm font-medium rounded-lg px-3 py-2 border border-gray-700"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            Filters
          </button>

          {/* Desktop filters inline */}
          <div className="hidden sm:flex items-center gap-3 ml-auto">
            <select
              value={priceRange.label}
              onChange={(e) => setPriceRange(PRICE_RANGES.find((p) => p.label === e.target.value))}
              className="bg-gray-800 text-gray-100 text-sm rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {PRICE_RANGES.map((p) => (
                <option key={p.label} value={p.label}>{p.label}</option>
              ))}
            </select>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="bg-gray-800 text-gray-100 text-sm rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {GENDER_OPTIONS.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="bg-gray-800 text-gray-100 text-sm rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {TYPE_OPTIONS.map((t) => (
                <option key={t} value={t}>{t === 'Any' ? 'PG / Room' : t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Mobile filters dropdown */}
        {showFilters && (
          <div className="sm:hidden max-w-7xl mx-auto mt-3 grid grid-cols-2 gap-2">
            <select
              value={priceRange.label}
              onChange={(e) => setPriceRange(PRICE_RANGES.find((p) => p.label === e.target.value))}
              className="bg-gray-800 text-gray-100 text-sm rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 col-span-2"
            >
              {PRICE_RANGES.map((p) => (
                <option key={p.label} value={p.label}>{p.label}</option>
              ))}
            </select>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="bg-gray-800 text-gray-100 text-sm rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {GENDER_OPTIONS.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="bg-gray-800 text-gray-100 text-sm rounded-lg px-3 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {TYPE_OPTIONS.map((t) => (
                <option key={t} value={t}>{t === 'Any' ? 'PG / Room' : t}</option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Listings */}
      <div className="max-w-7xl mx-auto px-4 py-5">
        <p className="text-gray-400 text-sm mb-4">
          {filteredRooms.length} {filteredRooms.length === 1 ? 'place' : 'places'} found in {city}
        </p>

        {filteredRooms.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-400 text-sm">No rooms match your filters. Try adjusting them.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                onClick={()=> window.open("/room")}
                className="bg-[#1A1D27] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 active:scale-[0.99] transition-all duration-150"
              >
                <div className="relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-44 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-gray-950/80 text-gray-100 text-xs font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    {room.type}
                  </span>
                  <span className="absolute top-3 right-3 bg-gray-950/80 text-gray-100 text-xs font-medium px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    {room.gender}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-gray-100 font-semibold text-base mb-1 truncate">
                    {room.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{room.city}</p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#7C5CFC] font-semibold text-lg">
                      ₹{room.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-gray-500 text-sm">/month</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;