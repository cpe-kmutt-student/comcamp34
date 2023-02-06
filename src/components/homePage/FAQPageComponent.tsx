import question from "@/components/homePage/FAQdata.json";
import { useState } from "react";
import { Link } from "react-router-dom";
const FAQPageComponent = () => {
   const [selectedQuestion, setSelectedQuestion] = useState(null);

   const toggleFAQ = (i: any) => {
      if (selectedQuestion === i) {
         return setSelectedQuestion(null);
      }
      setSelectedQuestion(i);
   };

   return (

         <div className=' w-full lg:bg-contain bg-base-white h-full lg:bg-[url("/assets/frontPage/bgFAQpage.png")]'>
            <div className='relative max-w-7xl m-auto my-8 lg:my-16 flex justify-center font-bai-jamjuree '>
               <div
                  className='w-5/6 lg:my-auto mt-4 cursor-pointer relative z-10'
                  data-aos='fade-down'
               >
                <p className="font-semibold text-7xl tracking-wider drop-shadow-lg text-red1 font-teko mb-4">FAQ</p>
                  {question.map((item, index) => (
                     <div
                        className={`bg-inherit`}
                        onClick={() => {
                           toggleFAQ(index);
                        }}
                     >
                        <div
                           className={`flex justify-between pt-4 pb-2 border-b-[3px] ${
                              selectedQuestion === index
                                 ? "border-base-black/50"
                                 : "border-base-black/25"
                           } 
                        ${selectedQuestion != index ? "hover:bg-yellow3/25" : null} ${
                              selectedQuestion === index ? "bg-yellow3/50" : "bg-inherit"
                           }`}
                        >
                           <p className='ml-1 mr-5 text-base lg:text-lg font-semibold text-left text-base-black/75'>
                              {item.question}
                           </p>
                           {selectedQuestion != index ? (
                              <svg
                                 className='w-6 h-6 absolute right-0'
                                 xmlns='http://www.w3.org/2000/svg'
                                 viewBox='0 0 24 24'
                                 fill='none'
                                 stroke='#17171B'
                                 stroke-width='2'
                              >
                                 <line x1='12' y1='5' x2='12' y2='19'></line>
                                 <line x1='5' y1='12' x2='19' y2='12'></line>
                              </svg>
                           ) : (
                              <svg
                                 className='w-6 h-6 absolute right-0'
                                 xmlns='http://www.w3.org/2000/svg'
                                 viewBox='0 0 24 24'
                                 fill='none'
                                 stroke='#000000'
                                 stroke-width='2'
                              >
                                 <line x1='5' y1='12' x2='19' y2='12'></line>
                              </svg>
                           )}
                        </div>
                        <div
                           className={`text-base lg:text-lg  ${
                              selectedQuestion === index
                                 ? "max-h-[8rem]"
                                 : "max-h-0 overflow-hidden"
                           } font-normal text-left  
                                ${
                                   selectedQuestion === index ? "pt-4 px-3 pb-2" : "p-0"
                                } bg-white transition-all duration-100 ease-linear`}
                        >
                           {item.answer}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
   );
};
export default FAQPageComponent;