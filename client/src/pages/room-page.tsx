import React, { useState } from 'react';

// Mock data — replace with API response later
const ROOM_DATA = {
  id: 1,
  name: 'Sunrise PG for Men',
  city: 'Bangalore',
  location: 'Koramangala, 5th Block, Bangalore - 560095',
  gender: 'Male',
  type: 'PG',
  price: 8000,
  deposit: 16000,
  availableFrom: '1st July 2026',
  description:
    'A comfortable and well-maintained PG located in the heart of Koramangala, just 5 minutes walk from the bus stop and close to major tech parks. The rooms are spacious with attached washrooms, and the property offers a homely environment with all essential amenities.',
  amenities: ['WiFi', 'Power Backup', 'Laundry', 'Housekeeping', '3 Meals Included', 'CCTV Security', 'Parking', 'AC Rooms'],
  rules: ['No smoking inside premises', 'Visitors allowed till 8 PM', 'ID proof mandatory at check-in'],
  owner: {
    name: 'Ramesh Kumar',
    phone: '+919876543210',
  },
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9!2d77.6245!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14f2d9e0e0e1%3A0x1!2sKoramangala%2C+Bangalore!5e0!3m2!1sen!2sin!4v1234567890',
  images: [
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop',
  ],
};

export const RoomPage = ({ room = ROOM_DATA }) => {
  const [activeImage, setActiveImage] = useState(0);

  const handleCall = () => {
    window.location.href = `tel:${room.owner.phone}`;
  };

  return (
    <div className="min-h-screen bg-gray-950 pb-24 sm:pb-10">
      <div className="max-w-5xl mx-auto px-4 py-5 sm:py-8">

        {/* Image gallery */}
        <div className="mb-5">
          <div className="rounded-2xl overflow-hidden border border-gray-800 mb-2">
            <img
              src={room.images[activeImage]}
              alt={`${room.name} - photo ${activeImage + 1}`}
              className="w-full h-56 sm:h-80 lg:h-96 object-cover"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {room.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`rounded-lg overflow-hidden border-2 transition-colors ${
                  activeImage === idx ? 'border-indigo-500' : 'border-gray-800'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-12 sm:h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Title + tags */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gray-800 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-lg">
              {room.type}
            </span>
            <span className="bg-gray-800 text-gray-200 text-xs font-medium px-2.5 py-1 rounded-lg">
              {room.gender}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-1">
            {room.name}
          </h1>
          <div className="flex items-center gap-1.5 text-gray-400 text-sm">
            <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {room.location}
          </div>
        </div>

        {/* Price card */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-5 mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-gray-400 text-sm mb-1">Monthly rent</p>
            <div className="flex items-baseline gap-1">
              <span className="text-indigo-400 font-semibold text-2xl sm:text-3xl">
                ₹{room.price.toLocaleString('en-IN')}
              </span>
              <span className="text-gray-500 text-sm">/month</span>
            </div>
          </div>
          <div className="border-l border-gray-800 pl-4">
            <p className="text-gray-400 text-sm mb-1">Security deposit</p>
            <p className="text-gray-100 font-medium text-lg">
              ₹{room.deposit.toLocaleString('en-IN')}
            </p>
          </div>
          <div className="border-l border-gray-800 pl-4">
            <p className="text-gray-400 text-sm mb-1">Available from</p>
            <p className="text-gray-100 font-medium text-lg">{room.availableFrom}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-100 mb-2">About this place</h2>
          <p className="text-gray-400 text-sm leading-relaxed">{room.description}</p>
        </div>

        {/* Amenities */}
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-100 mb-3">Amenities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {room.amenities.map((item) => (
              <div
                key={item}
                className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2.5 text-gray-300 text-sm flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-indigo-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* House rules */}
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-100 mb-3">House rules</h2>
          <ul className="space-y-2">
            {room.rules.map((rule) => (
              <li key={rule} className="text-gray-400 text-sm flex items-start gap-2">
                <span className="text-gray-600 mt-1">•</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Owner contact - desktop */}
        <div className="hidden sm:flex items-center justify-between bg-gray-900 border border-gray-800 rounded-2xl p-5 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold text-lg">
              {room.owner.name.charAt(0)}
            </div>
            <div>
              <p className="text-gray-100 font-medium">{room.owner.name}</p>
              <p className="text-gray-400 text-sm">Property owner</p>
            </div>
          </div>
          <button
            onClick={handleCall}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.27.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
            Call {room.owner.phone}
          </button>
        </div>

        {/* Map */}
        <div className="mb-5">
          <h2 className="text-lg font-semibold text-gray-100 mb-3">Location</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <iframe
              src={room.mapEmbedUrl}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Room location map"
            />
          </div>
        </div>
      </div>

      {/* Sticky call button - mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-4">
        <button
          onClick={handleCall}
          className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 active:scale-[0.98] text-white font-medium py-3.5 rounded-lg transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.27.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
          </svg>
          Call owner: {room.owner.phone}
        </button>
      </div>
    </div>
  );
};

export default RoomPage;