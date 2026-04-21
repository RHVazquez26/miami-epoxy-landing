import React from 'react';

const testimonials = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    location: "Coral Gables",
    text: "The best epoxy floors in Miami! They transformed my old garage into a professional-looking showroom. Highly recommended.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Miller",
    location: "Doral",
    text: "Incredible attention to detail. Our commercial kitchen floor is now safer and looks amazing. Fast installation too!",
    rating: 5
  },
  {
    id: 3,
    name: "Miguel Sanchez",
    location: "Hialeah",
    text: "Top-notch garage floor coating. The metallic finish is stunning. Professional team and very clean work.",
    rating: 5
  }
];

const Reviews = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-secondary text-sm font-medium">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
