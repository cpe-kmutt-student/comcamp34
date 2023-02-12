import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
   const divRef = useRef<HTMLDivElement>(null);
   const imgRef = useRef<HTMLImageElement>(null);
   const mobileDivRef = useRef<HTMLDivElement>(null);
   const [string, setString] = useState<any>("base-black");
   const [notebookRotation, setNoteBookRotation] = useState<number>(-45);
   const [bookRotation, setBookRotation] = useState<number>(-45);
   const [textToggle, setTextToggle] = useState<boolean>(false);
   const [textMobileToggle, setMobileTextToggle] = useState<boolean>(false);
   useEffect(() => {
      setString("base-black");
      const handleScroll = () => {
         let notebook: any = document.getElementById("notebook");
         let book: any = document.getElementById("book");
         let coffee: any = document.getElementById("coffee");
         let mobile_notebook: any = document.getElementById("mobile_notebook");
         let value: number = window.scrollY;
         let top_notebook = 50 + (window.innerHeight - notebook.offsetHeight) / 0.7;
         let top_book = (window.innerHeight - book.offsetHeight) / 0.7;
         let left_book = -500 + (window.innerWidth - book.offsetWidth) / 4;
         const div = divRef.current;
         const mobileDiv: any = mobileDivRef.current;
         const img = imgRef.current;
         if (div) {
            const scrollPos = window.scrollY + window.innerHeight;
            const divPosStage1 = div.offsetTop + div.offsetHeight / 3.5;
            const divPosStage2 = div.offsetTop + div.offsetHeight / 1.75;
            const divPosStage3 = div.offsetTop + div.offsetHeight / 1.25;
            const divPosStage4 = div.offsetTop + div.offsetHeight / 1.15;
            const divPosStageEnd = div.offsetTop + div.offsetHeight / 1;
            const mobileDivPosStage1 = mobileDiv.offsetTop + mobileDiv.offsetHeight / 3;
            const mobileDivPosStage2 = mobileDiv.offsetTop + mobileDiv.offsetHeight / 1.25;
            const mobileDivPosStage3 = mobileDiv.offsetTop + mobileDiv.offsetHeight / 1.15;
            const mobileDivPosStageEnd = mobileDiv.offsetTop + mobileDiv.offsetHeight / 1;
            if (scrollPos < divPosStage1) {
               setString("base-black");
               notebook.style.left = 100 + value * 0.35 + "px";
               notebook.style.top = top_notebook + -value * 0.26 + "px";
               book.style.left = left_book + value * 0.5 + "px";
               book.style.top = -top_book + value * 0.25 + 100 + "px";
               //coffee.style.right = -400+(value * 0.5) + "px";
               //coffee.style.top = -100+(value * 0.4) + 100 + "px";
            }
            if (scrollPos >= divPosStage1 && scrollPos < divPosStage2) {
               setString("base-black");
               if (scrollPos > divPosStage1 + (divPosStage2 - divPosStage1) / 2) {
                  setNoteBookRotation(prevNotebookRotation => {
                     return Math.min(0, prevNotebookRotation + window.scrollY / 100);
                  });
                  setBookRotation(prevBookRotation => {
                     return Math.min(0, prevBookRotation + window.scrollY / 100);
                  });
               } else {
                  setNoteBookRotation(prevNotebookRotation => {
                     return Math.max(-45, prevNotebookRotation - window.scrollY / 100);
                  });
               }
            }
            if (divPosStage2 <= scrollPos && scrollPos < divPosStage3) {
               setString("base-black");
               const percent = (scrollPos - divPosStage2) / (divPosStage3 - divPosStage2);
               notebook.style.left =
                  0.3 * window.innerWidth +
                  (0.75 * window.innerWidth - 0.3 * window.innerWidth) * percent +
                  "px";
               book.style.left =
                  0.3 * window.innerWidth +
                  (0.75 * window.innerWidth - 0.3 * window.innerWidth) * percent +
                  "px";
               setTextToggle(false);
            }
            if (divPosStage3 <= scrollPos && scrollPos<divPosStage4) {
               setString("base-black");
               setTextToggle(true);
            }
            if(divPosStage4<= scrollPos && scrollPos<divPosStageEnd){
               setString("base-white");
            }
            if (scrollPos < mobileDivPosStage1) {
               //setString("blue1");
            }
            if (mobileDivPosStage1 <= scrollPos && mobileDivPosStage2 > scrollPos) {
               //setString("red2");
               const percent =
                  (scrollPos - mobileDivPosStage1) / (mobileDivPosStage2 - mobileDivPosStage1);
               mobile_notebook.style.left = -20 + (70 - -20) * percent + "%";
               setMobileTextToggle(false);
            }
            if (mobileDivPosStage2 <= scrollPos && mobileDivPosStage3 > scrollPos ) {
               setMobileTextToggle(true);
               setString("base-black");
            }
            if(mobileDivPosStage3<=scrollPos && scrollPos< mobileDivPosStageEnd){
               setString("base-white");
            }
         }
      };
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);


   return (
      <div className={`w-full flex bg-${string}`}>
         <div className='mx-auto relative w-full h-[600vh] hidden xl:block transition delay-100 ease-in-out' ref={divRef}>
            <div className='sticky top-10 mx-auto flex'>
               <div className='w-full relative overflow-hidden h-screen '>
                  {textToggle ? (
                     <p
                        className='text-9xl absolute text-yellow1 mt-[2.5%] ml-[2.5%] font-teko tracking-widest'
                        data-aos='zoom-in'
                     >
                        What is Comcamp?
                     </p>
                  ) : null}
                  {textToggle ? (
                     <p
                        className='text-3xl absolute text-base-black mt-[27.5%] xl:mt-[41vh] ml-[2.5%] mr-[35%] 
                         z-50 font-bai-jamjuree'
                        data-aos='zoom-in'
                     >
                        ค่าย Comcamp คือ ค่ายที่ทางภาควิชา วิศวกรรมคอมพิวเตอร์ มจธ. ได้จัดขึ้น
                        เพื่อให้น้อง ๆ ได้มาสัมผัสประสบการณ์ การเรียนรู้เสมือนน้อง ๆ
                        เป็นส่วนหนึ่งของรั้วแสดเหลือง โดยในค่ายมีการแนะแนวศึกษาต่อ และ
                        ยังได้ร่วมสนุกกับกิจกรรมสันทนาการจากพี่ ๆ CPE อีกด้วย
                     </p>
                  ) : null}
                  <div
                     id='notebook'
                     className='xl:w-[70vh] absolute h-3/5'
                     style={{
                        transform: `rotate(${notebookRotation}deg)`,
                     }}
                     ref={imgRef}
                  >
                     <img
                        src='/assets/frontPage/about-image-notebook.svg'
                        className='absolute z-50 m-auto w-[90%]'
                     />
                     <div className='absolute top-0 left-[-400%] h-[90%] pt-8 '>
                        <div className='bg-[#EB7D3E] w-[300vh] h-full'></div>
                     </div>
                     <img
                        src='/assets/frontPage/about-image-coffee.svg'
                        className='absolute z-50 m-auto w-[15vh] left-[50%] bottom-[-20%]'
                     />
                  </div>
                  <div
                     id='book'
                     className='xl:w-[30vh] absolute h-3/5'
                     style={{
                        transform: `rotate(${notebookRotation}deg)`,
                     }}
                     ref={imgRef}
                  >
                     <img
                        src='/assets/frontPage/about-image-book.svg'
                        className='absolute z-50 m-auto w-[90%]'
                     />
                  </div>
               </div>
            </div>
            <div id='about'></div>
         </div>
         <div 
            className={`mx-auto relative w-full h-[400vh] bg-${string} block xl:hidden transition delay-100 ease-in-out`}
            ref={mobileDivRef}
         >
            <div className='h-screen sticky flex flex-col top-0 overflow-hidden'>
               <div
                  className='flex flex-row h-fit absolute top-[10%] right-0'
                  data-aos='fade-right'
               >
                  <p
                     className='text-6xl sm:text-8xl md:text-[12vw] lg:text-9xl  
                        text-yellow1 font-teko tracking-widest my-auto ml-4 sm:ml-10 text-center mr-4'
                  >
                     What is Comcamp?
                  </p>
                  <img src='/assets/frontPage/about-image-book-mobile.svg' className='w-[15vh]' />
               </div>
               <div
                  className='flex absolute bottom-[15vh] sm:bottom-[10vh] left-[-20%] w-full z-100'
                  id='mobile_notebook'
               >
                  <div className='relative w-fit h-fit flex'>
                     <img
                        src='/assets/frontPage/about-image-notebook.svg'
                        className='w-[50vh] z-20 h-full'
                     />
                     <div className='w-[250vw] right-0 h-full py-6 absolute z-100 pr-4'>
                        <div className='bg-[#EB7D3E] h-full w-full'>
                        </div>
                     </div>
                  </div>
               </div>
               {textMobileToggle ? (
                  <div
                     className='text-[2vh] sm:text-3xl text-base-black absolute left-0 z-1000 mt-[50vh] sm:mt-[54vh] ml-4 sm:ml-10
                        mr-[40%] sm:mr-[37.5%] font-bai-jamjuree'
                     data-aos='zoom-in'
                  >
                     ค่าย Comcamp คือ ค่ายที่ทางภาควิชา วิศวกรรมคอมพิวเตอร์ มจธ. ได้จัดขึ้น
                     เพื่อให้น้อง ๆ ได้มาสัมผัสประสบการณ์ การเรียนรู้เสมือนน้อง ๆ
                     เป็นส่วนหนึ่งของรั้วแสดเหลือง โดยในค่ายมีการแนะแนวศึกษาต่อและ
                     ยังได้ร่วมสนุกกับกิจกรรมสันทนาการจากพี่ ๆ CPE อีกด้วย
                  </div>
               ) : null}
            </div>
         </div>
      </div>
   );
};
export default AboutSection;
