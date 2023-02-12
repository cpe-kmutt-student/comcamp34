const ConditionsSection = () => {
   return (
      <div
         id='conditions'
         className='pt-20 w-full text-center bg-contain bg-base-white lg:bg-[url("/assets/frontPage/condition-bg-desktop.png")] bg-[url("/assets/frontPage/condition-bg-mobile.png")]'
      >
         <p
            className='text-red2 drop-shadow-lg lg:text-8xl text-6xl md:text-8xl font-semibold mt-8  font-teko tracking-wider '
            data-aos='fade-down'
            data-aos-delay='200'
         >
            Conditions
         </p>
         <div className='max-w-7xl m-auto mt-24 mb-32 grid lg:grid-cols-4 grid-cols-1 gap-1 font-bai-jamjuree text-center '>
            <div className='mx-auto relative ' data-aos='flip-up' data-aos-delay='300'>
               <img src='assets/frontPage/condition-image-card-1.png' />
               <p className='absolute bottom-[15%] mx-5 inset-x-0'>
                  กำลังศึกษาอยู่
                  <br />
                  ชั้นมัธยมศึกษาปีที่ 
                  <br />
                  4-5 หรือเทียบเท่า
                  <br />
                  ในปีการศึกษา 2565
               </p>
            </div>
            <div className='mx-auto relative' data-aos='flip-up' data-aos-delay='400'>
               <img src='assets/frontPage/condition-image-card-2.png' />
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
            <div className='mx-auto relative' data-aos='flip-up' data-aos-delay='500'>
               <img src='assets/frontPage/condition-image-card-3.png' />
               <p className='absolute bottom-[15%] mx-5 inset-x-0'>
                  สามารถเข้าพักในระยะเวลา
                  <br />
                  และสถานที่ที่กำหนด
                  <br />
                  ตลอดโครงการ
               </p>
            </div>
            <div className='mx-auto relative' data-aos='flip-up' data-aos-delay='600'>
               <img src='assets/frontPage/condition-image-card-4.png' />
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
