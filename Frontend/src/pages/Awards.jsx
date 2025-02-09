import React from 'react';

const Awards = () => {
  const awards = [
    {
      title: 'Nobel Prize in Physics',
      year: 1921,
      description:
        'Albert Einstein was awarded the Nobel Prize in Physics in 1921 for his discovery of the photoelectric effect, which was pivotal in the development of quantum theory.',
    },
    {
      title: 'Copley Medal',
      year: 1925,
      description:
        'Einstein was awarded the prestigious Copley Medal for his contributions to theoretical physics, especially for his work on the theory of relativity.',
    },
    {
      title: 'Max Planck Medal',
      year: 1929,
      description:
        'This award was presented to Einstein for his services to theoretical physics and his profound influence on the development of physics in the 20th century.',
    },
    {
      title: 'Franklin Medal',
      year: 1935,
      description:
        'Einstein was honored with the Franklin Medal for his outstanding contributions to the field of science and his role in the theory of relativity.',
    },
    {
      title: 'Barnard Medal',
      year: 1929,
      description:
        'The Barnard Medal was awarded to Einstein for his profound impact on the scientific community, particularly in the realm of relativity.',
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-black text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Albert Einstein's Awards</h1>
          <p className="text-xl">Discover the remarkable achievements and accolades of one of the greatest minds in history.</p>
        </div>
      </header>

      {/* Awards Section */}
      <section className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {awards.map((award, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="bg-gray-100 p-6 rounded-t-lg">
              <h2 className="text-2xl font-semibold text-blue-600">{award.title}</h2>
              <p className="text-lg text-gray-600">{award.year}</p>
            </div>
            <div className="p-6">
              <p className="text-gray-700">{award.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Awards;
