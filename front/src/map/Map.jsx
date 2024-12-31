import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import { Search, Navigation2 } from 'lucide-react';

const InteractiveMap = () => {
  const [center, setCenter] = useState([40.7128, -74.0060]); // NYC coordinates
  const [zoom, setZoom] = useState(13);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample markers
  const markers = [
    { id: 1, coordinates: [40.7128, -74.0060], title: 'New York City' },
    { id: 2, coordinates: [40.7614, -73.9776], title: 'Empire State Building' },
  ];

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  return (
    <div className="w-full h-screen max-w-4xl mx-auto p-4">
      <div className="w-full h-full relative overflow-hidden rounded-lg bg-white shadow-lg">
        {/* Search bar */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="bg-white rounded-lg shadow-lg flex items-center p-2">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search locations..."
              className="w-full outline-none bg-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Map */}
        <Map
          height={800}
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
        >
          {markers.map(marker => (
            <Marker
              key={marker.id}
              width={50}
              anchor={marker.coordinates}
              onClick={() => alert(marker.title)}
            />
          ))}
        </Map>

        {/* Navigation controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button 
            onClick={handleLocationClick}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            <Navigation2 className="w-6 h-6 text-gray-700" />
          </button>
          <button 
            onClick={() => setZoom(zoom + 1)}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            +
          </button>
          <button 
            onClick={() => setZoom(zoom - 1)}
            className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;