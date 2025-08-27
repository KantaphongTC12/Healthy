import React from 'react';
import CardList from '../components/CardList';
import cardData from '../service/cardData';

const Recipes = () => {
  return (
    <main className="flex-grow bg-gray-50">
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold font-oswald text-center mb-8 text-gray-800">สูตรอาหารทั้งหมด</h1>
        <CardList recipes={cardData} />
      </section>
    </main>
  );
};

export default Recipes;