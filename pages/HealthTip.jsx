import React from 'react';

const HealthTip = () => {
  return (
    <main className="flex-grow bg-gray-50">
      <section 
        className="relative h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/10398604/pexels-photo-10398604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="relative text-4xl sm:text-5xl font-bold font-oswald drop-shadow-lg z-10">เกี่ยวกับเรา</h1>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold font-oswald mb-4 text-gray-800">เรื่องราวของเรา</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            "Healthy Veggie" ถือกำเนิดขึ้นจากความเชื่อที่ว่า **"อาหารสุขภาพไม่ใช่เรื่องยากและน่าเบื่อ"** เราเริ่มต้นจากการเป็นเพียงคนกลุ่มเล็กๆ ที่หลงใหลในการทำอาหารมังสวิรัติและอาหารเพื่อสุขภาพ และอยากแบ่งปันความรู้และสูตรอาหารที่ทำง่าย อร่อย และมีประโยชน์ให้กับทุกคน
          </p>
          <p className="text-gray-700 leading-relaxed">
            เราหวังว่าเว็บไซต์นี้จะเป็นจุดเริ่มต้นที่ทำให้คุณหันมาใส่ใจสุขภาพผ่านการทำอาหาร และค้นพบว่าการกินเพื่อสุขภาพนั้นเต็มไปด้วยความสุขและรสชาติที่หลากหลาย
          </p>
        </article>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold font-oswald mb-4 text-gray-800">พันธกิจของเรา</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>ส่งเสริมการทำอาหารสุขภาพด้วยตัวเอง</li>
              <li>นำเสนอสูตรอาหารที่ทำง่ายและเข้าถึงได้ทุกคน</li>
              <li>เป็นแหล่งข้อมูลความรู้ด้านสุขภาพที่น่าเชื่อถือ</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold font-oswald mb-4 text-gray-800">ทีมผู้สร้างสรรค์</h3>
            <p className="text-gray-700 leading-relaxed">
              เราคือทีมเล็กๆ ที่มีแพชชั่นในการทำอาหารและการแบ่งปัน เราเชื่อในพลังของการกินดีอยู่ดี และมุ่งมั่นที่จะเป็นส่วนหนึ่งในการทำให้ทุกคนมีสุขภาพที่ดีขึ้น
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HealthTip;