import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import {Context} from '../context/Context';
import {assets} from '../assets/assets';

const Achievements = () => {
  const {achievements} = useContext(Context);

  if (achievements.length === 0) {
    return (
      <div className="my-10">
        <p className="text-center text-xl text-gray-600">Loading achievements...</p>
      </div>
    );
  }
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="container mx-auto py-10 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Professor Albert Einstein</h1>
          <p className="text-xl text-gray-600 mb-6">A look at the remarkable achievements of one of the greatest minds in history</p>
        </div>
        <div className="flex justify-center mb-10">
          <img
            src={assets.albert_ee}
            alt="Albert Einstein"
            className="rounded-full shadow-lg w-48 h-48 object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            Professor Einstein's work continues to inspire scientists, students, and people all over the world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

