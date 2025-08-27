import React from 'react';

const AboutUs = () => {
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
        <h1 className="relative text-4xl sm:text-5xl font-bold font-oswald drop-shadow-lg z-10">เรื่องราวของเรา... ไม่ใช่แค่เว็บไซต์นะ</h1>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold font-oswald mb-4 text-gray-800">มันเริ่มต้นจากห้องครัวเล็กๆ</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            ก่อนอื่นต้องบอกว่า "Healthy Veggie" ไม่ได้เริ่มจากแผนธุรกิจที่ยิ่งใหญ่เลยครับ มันเริ่มจากความเบื่ออาหารเดิมๆ และความสงสัยเล็กๆ ว่า "อาหารสุขภาพมันจะอร่อยได้จริงเหรอ?"
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            เราเลยเริ่มทดลองทำอาหารมังสวิรัติในห้องครัวที่บ้าน ลองผิดลองถูกมานับครั้งไม่ถ้วน แต่สุดท้ายก็ค้นพบว่ามันสนุกมาก! และที่สำคัญคือมันอร่อยจนอยากจะตะโกนบอกทุกคน
          </p>
          <p className="text-gray-700 leading-relaxed">
            เลยเป็นที่มาของเว็บไซต์นี้ครับ ที่อยากจะรวบรวมสูตรอาหารง่ายๆ ที่ใครๆ ก็ทำได้ แล้วมาแชร์ให้ทุกคนได้ลองทำตาม หวังว่าทุกคนจะสนุกกับการทำอาหารเหมือนพวกเรานะครับ
          </p>
        </article>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold font-oswald mb-4 text-gray-800">เราคือใคร?</h3>
            <p className="text-gray-700 leading-relaxed">
              เราก็คือกลุ่มคนธรรมดาที่รักการทำอาหารและรักสุขภาพครับ ไม่ได้เป็นเชฟมืออาชีพหรือนักโภชนาการ แต่เราคือเพื่อนที่พร้อมจะชวนคุณเข้าครัวและทำอาหารอร่อยๆ ไปด้วยกัน
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold font-oswald mb-4 text-gray-800">ทำไมต้อง Healthy Veggie?</h3>
            <p className="text-gray-700 leading-relaxed">
              เพราะเราเชื่อว่าการกินดีคือการดูแลตัวเองที่ดีที่สุด และเราอยากพิสูจน์ให้คุณเห็นว่า "อาหารมังสวิรัติ" ไม่ได้มีแค่ผักต้มจืดๆ แต่มีรสชาติที่หลากหลายและทำได้ง่ายกว่าที่คุณคิด!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;