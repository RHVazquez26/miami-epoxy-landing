import React from 'react';

const projects = [
  { id: 1, src: '/images/project1.png', title: 'Metallic Epoxy Finish' },
  { id: 2, src: '/images/project2.png', title: 'Flake Garage Floor' },
  { id: 3, src: '/images/project3.png', title: 'Commercial Kitchen' },
  { id: 4, src: '/images/project4.png', title: 'Artistic Office Space' },
  { id: 5, src: '/images/project5.png', title: 'Terrazzo Detail' },
  { id: 6, src: '/images/project6.png', title: 'Modern Patio Finish' },
];

const Gallery = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">Our Latest Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
          Take a look at some of our recent installations across Miami. Quality that speaks for itself.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square">
              <img 
                src={project.src} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
