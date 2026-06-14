import React, { useState, useMemo } from 'react';
import { NavLink } from 'react-router';
import roomsDB from "../../data/rooms.json";

const CITIES = ['Guwahati', 'Baihata Chariali', 'Mangaldai'];

const ROOMS = roomsDB.listings;

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
                onClick={() => window.open("/room")}
                className="bg-[#1A1D27] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 active:scale-[0.99] transition-all duration-150"
              >
                <div className="relative">
                  <img
                    src={room.images[0]}
                    alt={room.name}
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
                    {room.name}
                  </h3>
                  <div className='flex gap-1'>
                    <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gray-400 text-sm mb-2">{room.location}</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-[#c3b5fc] font-semibold text-2xl">
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