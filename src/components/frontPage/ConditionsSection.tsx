const ConditionsSection = () => {
   return (
      <div className='w-full text-center bg-contain bg-base-white lg:bg-[url("/assets/frontPage/bgConditionsSection.png")] bg-[url("/assets/frontPage/bgformobile.png")]'>
         <p
            className='text-red2 drop-shadow-lg lg:text-9xl text-6xl md:text-8xl font-semibold mt-8  font-teko tracking-wider '
            data-aos='fade-down'
         >
            Conditions
         </p>
         <div className='max-w-7xl m-auto my-32 grid lg:grid-cols-4 grid-cols-1 gap-1 font-bai-jamjuree text-center '>
            <div className='mx-auto relative ' data-aos='fade-down' data-aos-delay='300'>
               <img src='assets/frontPage/card1.png' />
               <p className='absolute bottom-[15%] mx-5 inset-x-0'>
                  กำลังศึกษาอยู่
                  <br />
                  ชั้นมัธยมศึกษาปีที่ 4-5หรือ
                  <br />
                  เทียบเท่า
                  <br />
                  ในปีการศึกษา 2565
               </p>
            </div>
            <div className='mx-auto relative' data-aos='fade-down' data-aos-delay='400'>
               <img src='assets/frontPage/card2.png' />
               <p className='absolute bottom-[15%] mx-5 inset-x-0'>
                  มีความสนใจ
                  <br />
                  ในด้านคอมพิวเตอร์และ
                  <br />
                  ภาควิชาวิศวกรรมคอมพิวเตอร์
                  <br />
                  โดยไม่จำเป็นต้องมีพื้นฐาน
               </p>
            </div>
            <div className='mx-auto relative' data-aos='fade-down' data-aos-delay='500'>
               <img src='assets/frontPage/card3.png' />
               <p className='absolute bottom-[15%] mx-5 inset-x-0'>
                  สามารถเข้าพักในระยะเวลา
                  <br />
                  และสถานที่ที่กำหนด
                  <br />
                  ตลอดโครงการ
               </p>
            </div>
            <div className='mx-auto relative' data-aos='fade-down' data-aos-delay='600'>
               <img src='assets/frontPage/card4.png' />
               <p className='absolute bottom-[15%] mx-5 inset-x-0'>
                  ผู้ปกครองอนุญาตให้
                  <br />
                  นักเรียนเข้ากิจกรรม
               </p>
            </div>
         </div>
      </div>
   );
};
export default ConditionsSection;
