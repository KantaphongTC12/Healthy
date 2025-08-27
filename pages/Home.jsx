import React from "react";
import CardList from "../components/CardList";
import cardData from "../service/cardData";
import Button from './../components/Button';

const Home = () => {
  const latestRecipes = cardData.slice(0, 3);

  return (
    <main>
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="text-center p-4">
          <h2 className="text-5xl font-bold mb-4 font-oswald drop-shadow-lg">สุขภาพดีเริ่มต้นที่จานอาหาร</h2>
          <p className="mb-6 text-lg font-semibold drop-shadow-md">
            แหล่งรวมสูตรอาหารมังสวิรัติและอาหารสุขภาพทำง่าย
          </p>
          <Button nameButton="ดูสูตรอาหารทั้งหมด" path="/recipes" />
        </div>
      </section>

    </main>
  );
};

export default Home;