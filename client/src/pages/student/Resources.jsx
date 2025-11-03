import React, { useState } from 'react';

const ResourcesSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Hardcoded resources - Replace with your actual data
  const resources = [
    {
      id: 1,
      title: "Striver DSA Playlist",
      description: "Complete Data Structures and Algorithms playlist by Striver - from basics to advanced",
      type: "video",
      thumbnail: "https://i.ytimg.com/vi/0bHoB32fuj0/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/0bHoB32fuj0"
    },
    {
      id: 2,
      title: "Chai Aur Code JavaScript",
      description: "Complete JavaScript course in Hindi by Hitesh Choudhary - perfect for beginners",
      type: "video",
      thumbnail: "https://i.ytimg.com/vi/sscX432bMZo/maxresdefault.jpg",
      videoUrl: "https://www.youtube.com/embed/sscX432bMZo"
    },
    {
      id: 3,
      title: "DBMS by Love Babbar",
      description: "Complete Database Management System course by Love Babbar - covering all DBMS concepts",
      type: "video",
      thumbnail:"https://i.ytimg.com/vi/dl00fOOYLOM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDwlNd0G4vd9PN4PI6NJL788r73IA",
      videoUrl: "https://www.youtube.com/embed/dl00fOOYLOM"

    },
    {
      id: 4,
      title: "Web Development Roadmap 2024",
      description: "Complete roadmap to become a full-stack web developer",
      type: "link",
      thumbnail: "https://powerslides.com/wp-content/uploads/2021/12/Web-Development-Roadmap-4.png",
      externalUrl: "https://roadmap.sh/"
    },
    {
      id: 5,
      title: "API Documentation Guide",
      description: "Best practices for writing clear and comprehensive API docs",
      type: "link",
      thumbnail: "https://img.freepik.com/free-vector/hand-drawn-api-illustration_23-2149388656.jpg?semt=ais_hybrid&w=740&q=80",
      externalUrl: "https://developer.mozilla.org/en-US/docs/Web/API"
    },
    {
      id: 6,
      title: "Learn from your seniors experiences",
      description: "Discover how your seniors navigated their internships and interviews.",
      type: "link",
      thumbnail: "https://vitbargarh.ac.in/innerpagephoto/1585132209phpZX5JZ4.jpeg",
      externalUrl: "https://internito.csesnitw.in/"
    }
  ];

  const getResourceBadgeColor = (type) => {
    switch (type) {
      case 'video':
        return 'bg-red-500 text-white';
      case 'document':
        return 'bg-blue-500 text-white';
      case 'image':
        return 'bg-green-500 text-white';
      case 'link':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const handleResourceClick = (e, resource) => {
    e.stopPropagation();
  };

  const handleActionClick = (e, resource) => {
    e.stopPropagation();
    
    if (resource.type === 'video') {
      setSelectedVideo(resource);
    } else if (resource.type === 'link') {
      window.open(resource.externalUrl, '_blank');
    } else if (resource.type === 'document') {
      window.open(resource.downloadUrl, '_blank');
    } else if (resource.type === 'image') {
      window.open(resource.fullImageUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold font-serif text-gray-900 mb-4 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                Resources
            </h1>
            <p className="text-xl text-gray-700 font-medium max-w-3xl mx-auto">
                Access our collection of high-quality, free educational resources — including curated videos, documents, and learning materials.
            </p>
        </div>

        {/* Resources Grid - 3x3 format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={resource.thumbnail}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Video Play Overlay */}
                {resource.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-all duration-300">
                    <div className="bg-white rounded-full p-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}
                
                {/* Resource Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold shadow-lg ${getResourceBadgeColor(resource.type)}`}>
                    {resource.type.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                  {resource.description}
                </p>

                {/* Action Button */}
                <div className="mt-auto">
                  {resource.type === 'video' && (
                    <button 
                      onClick={(e) => handleActionClick(e, resource)}
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:from-teal-700 hover:to-teal-800 active:scale-95 transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                      Watch Now
                    </button>
                  )}
                  {resource.type === 'document' && (
                    <button 
                      onClick={(e) => handleActionClick(e, resource)}
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:from-teal-700 hover:to-teal-800 active:scale-95 transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download
                    </button>
                  )}
                  {resource.type === 'link' && (
                    <button 
                      onClick={(e) => handleActionClick(e, resource)}
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:from-teal-700 hover:to-teal-800 active:scale-95 transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Open Link
                    </button>
                  )}
                  {resource.type === 'image' && (
                    <button 
                      onClick={(e) => handleActionClick(e, resource)}
                      className="w-full bg-gradient-to-r from-teal-600 to-teal-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-xl hover:from-teal-700 hover:to-teal-800 active:scale-95 transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      View Image
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Preview Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-blue-50 to-purple-50">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedVideo.title}
                </h3>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 p-2 rounded-full transition-all duration-200 active:scale-90"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="aspect-video bg-black">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-gray-700 text-lg">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesSection;