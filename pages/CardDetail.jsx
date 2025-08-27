import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cardData from '../service/cardData';
import { BsArrowLeft } from 'react-icons/bs';

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the recipe with the matching id
  const recipe = cardData.find(item => item.id === parseInt(id));

  // If the recipe is not found, show a message
  if (!recipe) {
    return (
      <main className="flex-grow bg-gray-50 flex items-center justify-center min-h-screen">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">ไม่พบข้อมูลสูตรอาหาร</h2>
          <p className="text-gray-600 mb-4">โปรดกลับไปที่หน้าสูตรอาหารเพื่อเลือกเมนูอื่น</p>
          <button
            onClick={() => navigate('/recipes')}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            กลับไปหน้าสูตรอาหาร
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-grow bg-gray-50">
      <section className="container mx-auto px-4 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-6"
        >
          <BsArrowLeft className="mr-2" />
          กลับ
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96 w-full">
            <img
              src={recipe.imageUrl}
              alt={recipe.title}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8">
            <h1 className="text-4xl font-bold font-oswald text-gray-800 mb-4">{recipe.title}</h1>
            <p className="text-gray-700 text-lg mb-6">{recipe.description}</p>
            
            <hr className="my-6 border-gray-200" />

            {/* ส่วนวัตถุดิบ */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">วัตถุดิบ</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            {/* ส่วนวิธีทำ */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">วิธีทำ</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CardDetail;