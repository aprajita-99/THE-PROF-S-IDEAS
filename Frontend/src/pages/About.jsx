import React from 'react';
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div className="p-5 bg-gray-100 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About Albert Einstein</h1>
        <img 
          src={assets.albert_e}
          alt="Albert Einstein"
          className="w-48 h-auto rounded-full mt-5 mx-auto"
        />
      </header>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Early Life</h2>
        <p className="text-lg text-gray-700 mt-4">
          Albert Einstein was born on March 14, 1879, in Ulm, in the Kingdom of Württemberg in the German Empire.
          His family was of Jewish descent, and from a young age, he showed a fascination with mathematics and science.
          Despite his love for these subjects, he struggled in traditional school settings. His curiosity, however, never waned,
          and he eventually went on to revolutionize the world of physics.
        </p>
        <img 
          src={assets.albert_ee}
          alt="Einstein in 1905"
          className="w-1/3 max-w-xl mx-auto mt-5 rounded-lg shadow-lg"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Major Achievements</h2>
        <ul className="list-disc pl-6 mt-4 text-lg text-gray-700 space-y-2">
          <li><strong>The Theory of Relativity:</strong> A groundbreaking theory that revolutionized the understanding of space, time, and gravity.</li>
          <li><strong>The Equation \(E = mc^2\):</strong> One of the most famous equations, illustrating the relationship between mass and energy.</li>
          <li><strong>Nobel Prize in Physics (1921):</strong> Awarded for his explanation of the photoelectric effect, which laid the foundation for quantum theory.</li>
          <li><strong>Contributions to Quantum Mechanics:</strong> Einstein’s work in quantum mechanics helped shape the field, including his contributions to the understanding of the photoelectric effect and the quantization of light.</li>
        </ul>
        <img 
          src={assets.albert_eee}
          alt="Einstein with Nobel Prize"
          className="w-1/3 max-w-xl mx-auto mt-5 rounded-lg shadow-lg"
        />
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold text-gray-800">Philosophy and Legacy</h2>
        <p className="text-lg text-gray-700 mt-4">
          Beyond his scientific achievements, Einstein was deeply involved in social and political issues. He was an advocate for peace, civil rights, and freedom of speech. His thoughts on the philosophical implications of science continue to inspire individuals worldwide. His famous quote, “Imagination is more important than knowledge,” reflects his belief in the power of creative thinking.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          Einstein’s contributions have forever altered the course of physics and our understanding of the universe. His name remains synonymous with brilliance, and his work continues to inspire generations of scientists.
        </p>
      </section>

      <footer className="text-center mt-10 text-sm text-gray-600">
        <p>
          To explore more about Albert Einstein's life and work, visit his{' '}
          <a href="https://en.wikipedia.org/wiki/Albert_Einstein" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Wikipedia page
          </a>.
        </p>
      </footer>
    </div>
  );
};

export default About;
