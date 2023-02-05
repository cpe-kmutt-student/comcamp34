const LearningSection = () => {
   return (
      <div className="w-full text-center bg-contain bg-base-white">
         <p
            className="text-red2 drop-shadow-lg lg:text-8xl text-6xl md:text-8xl font-semibold mt-8 font-teko tracking-wider"
            data-aos="fade-down"
         >
            Learning
         </p>
         <div className="m-auto mb-32 mt-14 relative overflow-x-hidden hidden lg:block">
            <img src="assets/frontPage/handAndPhoneLearningSection.svg" className="w-2/3  ml-auto mb-auto"
               data-aos="fade-left" data-aos-delay="200"
            />
            <div className="absolute top-0 left-[15%] text-left w-1/5 flex flex-col">
               <div data-aos="zoom-in" data-aos-delay="250">
                  <p className="font-teko tracking-widest text-[3vw] drop-shadow-lg text-base-black">C Programming</p>
                  <p className="tracking-widest text-[0.9vw] font-bai-jamjuree text-base-black/75">
                     อยากเขียนโปรแกรมเป็น… แต่ไม่รู้จะเริ่มตรงไหน?
                     มาเรียนรู้กับพื้นฐานทางภาษาของโปรแกรมเมอร์
                     C language และ Flowchart เครื่องมือที่จะทำให้
                     การทำความเข้าใจโค้ดไม่ใช่เรื่องยากอีกต่อไป งานนี้บอกเลยว่าคนอ่านโค้ดไม่ได้ก็เข้าใจได้!</p>
               </div>
               <div data-aos="zoom-in" data-aos-delay="300">
                  <p className="font-teko tracking-widest text-[3vw] drop-shadow-lg text-base-black">Microcontroller</p>
                  <p className="tracking-widest text-[0.9vw] font-bai-jamjuree text-base-black/75">
                     ปลดล็อคศักยภาพในการควบคุมอุปกรณ์ที่เปรียบ
                     เสมือนเครื่องคอมพิวเตอร์ขนาดเท่าฝ่ามือของคุณ เพื่อสรรค์สร้างเทคโนโลยีสุดล้ำแห่งอนาคต</p>
               </div>
               <div data-aos="zoom-in" data-aos-delay="350">
                  <p className="font-teko tracking-widest text-[3vw] drop-shadow-lg text-right leading-10 mr-8 text-base-black">
                     Web <br /> Development
                  </p>
                  <p className="tracking-widest text-[0.9vw] font-bai-jamjuree texl-left text-base-black/75 mt-2">
                     ปลดล็อคศักยภาพในการควบคุมอุปกรณ์ที่เปรียบ
                     เสมือนเครื่องคอมพิวเตอร์ขนาดเท่าฝ่ามือของคุณ เพื่อสรรค์สร้างเทคโนโลยีสุดล้ำแห่งอนาคต</p>
               </div>
            </div>
            <div className="absolute top-2 right-[5%] text-left w-[25%] flex flex-col">
               <div data-aos="zoom-in" data-aos-delay="250">
                  <p className="font-teko tracking-widest text-[3vw] drop-shadow-lg text-base-black leading-10">Data Analytics
                     and Visualization </p>
                  <p className="tracking-widest text-[0.9vw] font-bai-jamjuree text-base-black/75 mt-2">
                     ดูสิ! ท่องเน็ตทีไร โฆษณาตรงใจทุกที?
                     มาไขขำตอบ ผ่านวิชานี้กัน! เรียนรู้ภาษา Python ไปจนถึงกระบวนท่าในการวิเคราะห์ข้อมูล ด้วย Pandas</p>
               </div>
               <div data-aos="zoom-in" data-aos-delay="300">
                  <p className="font-teko tracking-widest text-[3vw] drop-shadow-lg text-base-black leading-10 mt-2 xl:mt-10">Build a Game</p>
                  <p className="tracking-widest text-[0.9vw] font-bai-jamjuree text-base-black/75">
                     ชอบเล่นเกม ทำไมเราไม่ลองสร้างเกมมาเล่นเองกันบ้างหล่ะ? เรียนรู้การสร้างเกมเบื้องต้น ด้วย Unity และ C#</p>
               </div>
            </div>
         </div>
         <div className="m-auto mb-32 mt-14 relative overflow-x-hidden block lg:hidden">
            <img src="assets/frontPage/LearningSectionMobilePart1.svg" className="mr-auto w-full" data-aos="fade-left" />
            <img src="assets/frontPage/LearningSectionMobilePart2.svg" className="ml-auto w-1/2" data-aos="fade-right" />
            <div className="absolute h-full top-0 flex flex-col w-full">
               <div className="h-1/2 w-3/5 ml-auto flex flex-col mt-[10%] md:[20%] sm:mt-[20%]">
                  <div className="ml-4" data-aos="zoom-in" data-aos-delay="100">
                     <p className="font-teko tracking-widest text-[7.5vw] sm:text-5xl drop-shadow-lg text-base-black leading-10 text-left">Data Analytics
                        and Visualization </p>
                     <p className="tracking-widest sm:text-lg md:text-xl  text-[3vw] font-bai-jamjuree text-base-black/75 mt-2 text-left">
                        ดูสิ! ท่องเน็ตทีไร โฆษณาตรงใจทุกที?
                        มาไขขำตอบ ผ่านวิชานี้กัน! เรียนรู้ภาษา Python ไปจนถึงกระบวนท่าในการวิเคราะห์ข้อมูล ด้วย Pandas</p>
                  </div>
                  <div className="ml-4 mt-[20%] sm:mt-[25%] md:mt-[35%]" data-aos="zoom-in" data-aos-delay="150">
                     <p className="font-teko tracking-widest text-[7.5vw] sm:text-5xl drop-shadow-lg text-base-black leading-10 text-left">
                        Build a Game</p>
                     <p className="tracking-widest sm:text-xl text-[3vw] font-bai-jamjuree text-base-black/75 mt-0s text-left">
                        ชอบเล่นเกม ทำไมเราไม่ลองสร้างเกมมาเล่นเองกันบ้างหล่ะ? เรียนรู้การสร้างเกมเบื้องต้น ด้วย Unity และ C#
                     </p>
                  </div>
               </div>
               <div className="h-1/2 w-1/2 flex flex-col mt-0 ml-2">
                  <div className="ml-2 mt-[30%] sm:mt-[25%] md:mt-[30%]" data-aos="zoom-in" data-aos-delay="100">
                     <p className="font-teko tracking-widest text-[7.5vw] sm:text-5xl drop-shadow-lg text-base-black leading-10 text-right mr-2">
                        C Programming</p>
                     <p className="tracking-widest sm:text-xl text-[2.75vw] font-bai-jamjuree text-base-black/75 mt-0s text-left">
                        อยากเขียนโปรแกรมเป็น… แต่ไม่รู้จะเริ่มตรงไหน?
                        มาเรียนรู้กับพื้นฐานทางภาษาของ
                        โปรแกรมเมอร์ C language และ Flowchart เครื่องมือที่จะทำให้
                        การทำความเข้าใจโค้ดไม่ใช่เรื่องยาก
                        อีกต่อไป งานนี้บอกเลยว่า คนอ่านโค้ดไม่ได้ก็เข้าใจได้!
                     </p>
                  </div>
                  <div className="ml-2 mt-[15%] sm:mt-[10%] md:mt-[40%]" data-aos="zoom-in" data-aos-delay="150">
                     <p className="font-teko tracking-widest text-[7.5vw] sm:text-5xl drop-shadow-lg text-base-black leading-10 text-right mr-2">
                        Microcontroller</p>
                     <p className="tracking-widest sm:text-xl text-[2.75vw] font-bai-jamjuree text-base-black/75 mt-0s text-left">
                        ปลดล็อคศักยภาพในการควบคุมอุปกรณ์ที่เปรียบเสมือนเครื่อง
                        คอมพิวเตอร์ ขนาดเท่าฝ่ามือ
                        ของคุณ เพื่อสรรค์สร้าง
                        เทคโนโลยีสุดล้ำแห่งอนาคต
                     </p>
                  </div>
                  <div className="ml-2 mt-4 sm:mt-[10%] md:mt-[40%]" data-aos="zoom-in" data-aos-delay="200">
                     <p className="font-teko tracking-widest text-[7.5vw] sm:text-5xl drop-shadow-lg text-base-black leading-[1.75rem] text-right mr-2">
                        Web <br /> Development</p>
                     <p className="tracking-widest sm:text-xl text-[2.75vw] font-bai-jamjuree text-base-black/75 mt-0s text-left">
                        สร้างเว็บไซต์ด้วยตนเองไม่ยาก เรียนรู้การสร้างเว็บไซต์จากศูนย์
                        ด้วย HTML ตกแต่งหน้าตา
                        เว็บไซต์รวมถึงเพิ่มลูกเล่นตาม
                        ต้องการ ด้วย CSS และ Javascript
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </div>
   );
};
export default LearningSection;
