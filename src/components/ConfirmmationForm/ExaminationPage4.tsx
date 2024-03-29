import { useState, useEffect } from "react";
import { Page4 } from "@/types/ConfirmationType";
import Choice4_1 from "./data/q4_1.json";
import Choice4_2 from "./data/q4_2.json";

const ExaminationPage4 = ({ data, setData }: { data: Page4; setData: any }) => {
   const [q1, setQ1] = useState<Array<boolean>>(new Array(Choice4_1.length).fill(false));
   const [q2, setQ2] = useState<Array<boolean>>(new Array(Choice4_2.length).fill(false));

   const [question1State, setQuestion1State] = useState<Array<number>>([]);

   const [question2State, setQuestion2State] = useState<Array<number>>([]);

   const handleOnChangeQ1 = (value: Number) => {
      const indexArr = question1State.findIndex((items: any) => {
         return items === value;
      });

      if (indexArr === -1) {
         question1State.push(value as any);
      } else {
         question1State.splice(indexArr, 1);
      }
      setQuestion1State(question1State.sort());
      const json = JSON.stringify(
         question1State
            .map((items: any) => {
               return (items + 1) as number;
            })
            .sort((a, b) => {
               return a - b;
            }),
      );
      setData({ ...data, q4_1: json });
   };

   const handleOnChangeQ2 = (value: Number) => {
      const indexArr = question2State.findIndex((items: any) => {
         return items === value;
      });

      if (indexArr === -1) {
         question2State.push(value as any);
      } else {
         question2State.splice(indexArr, 1);
      }
      setQuestion2State(question2State.sort());
      const json = JSON.stringify(
         question2State
            .map((items: any) => {
               return (items + 1) as number;
            })
            .sort((a, b) => {
               return a - b;
            }),
      );
      setData({ ...data, q4_2: json });
   };

   const loadData = async () => {
      await setQuestion1State(
         data.q4_1 === null || data.q4_1 === ""
            ? []
            : JSON.parse(data.q4_1).map((items: any) => {
                 return (items - 1) as number;
              }),
      );

      await setQuestion2State(
         data.q4_2 === null || data.q4_2 === ""
            ? []
            : JSON.parse(data.q4_2).map((items: any) => {
                 return (items - 1) as number;
              }),
      );

      const dataTempQ1 = data.q4_1 ? JSON.parse(data.q4_1) : [];
      const tempQ1 = [...q1];
      dataTempQ1.map((items: any) => {
         tempQ1[items - 1] = true;
      });
      setQ1(tempQ1);

      const dataTempQ2 = data.q4_2 ? JSON.parse(data.q4_2) : [];
      const tempQ2 = [...q2];
      dataTempQ2.map((items: any) => {
         tempQ2[items - 1] = true;
      });
      setQ2(tempQ2);
   };

   useEffect(() => {
      loadData().then(() => {});
   }, [data]);

   return (
      <>
         <div className='flex justify-center mt-8'>
            <div className='bg-yellow3 bg-opacity-40 lg:rounded-2xl rounded-lg flex flex-col font-bai-jamjuree lg:px-16 px-6 pt-4 py-8 w-11/12'>
               <p className='text-red2 font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mt-3'>
                  ข้อสอบรายวิชา Data Analytics and Visualization with Python
               </p>

               <div className='my-7'>
                  <div>
                     <div className='font-bold text-lg lg:text-2xl'>
                        4.1 พี่โต และ พี่คัทซึยะ กำลังถกเถียงกันเกี่ยวกับ ไวยกรณ์ (Syntax) การเขียนโปรแกรมด้วยภาษาไพธอน (Python) ข้อความใดต่อไปนี้กล่าวถูกต้อง  <br/> (คำตอบที่ถูกต้องมีมากกว่า 1 ข้อ และ หักคะแนนเมื่อคำตอบผิด) 
                        <span className='text-orange'>*</span>
                     </div>
                     <ul className='flex flex-col my-3 sm:ml-8'>
                     {q1.map((items: any, index: number) => {
                           return (
                              <li key={index} className='my-3'>
                                 <label>
                                    <input
                                       type='checkbox'
                                       id={`q4_1-${index}`}
                                       name='q4_1'
                                       value={Choice4_1[index].choice}
                                       checked={items}
                                       onChange={() => {
                                          const tempQ1 = [...q1];
                                          tempQ1[index] = !tempQ1[index];
                                          setQ1(tempQ1);
                                          handleOnChangeQ1(index);
                                       }}
                                       className='p-2 form-check-input appearance-none cursor-pointer rounded-md border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white'
                                    />
                                    <span className='w-full ml-3 font-semibold text-md sm:text-lg lg:text-xl text-clip'>
                                       {Choice4_1[index].choice}
                                    </span>
                                 </label>
                              </li>
                           );
                        })}
                     </ul>
                  </div>
                  <hr className='h-px my-8 bg-black/30 border-0' />
                  <div className='mt-6'>
                     <div className='font-bold text-lg lg:text-2xl'>
                        4.2 รัททาทุยและ พี่หลาม กำลังคุยโม้เกี่ยวกับโครงสร้างข้อมูล ในภาษาไพธอน (Python) ข้อความใดต่อไปนี้กล่าวถูกต้อง  <br/> (คำตอบที่ถูกต้องมีมากกว่า 1 ข้อ และ หักคะแนนเมื่อคำตอบผิด)
                        <span className='text-orange'>*</span>
                     </div>
                     <ul className='flex flex-col my-3 sm:ml-8'>
                     {q2.map((items: any, index: number) => {
                           return (
                              <li key={index} className='my-3'>
                                 <label>
                                    <input
                                       type='checkbox'
                                       id={`q3_2-${index}`}
                                       name='q3_2'
                                       value={Choice4_2[index].choice}
                                       checked={items}
                                       onChange={() => {
                                          const tempQ2 = [...q2];
                                          tempQ2[index] = !tempQ2[index];
                                          setQ2(tempQ2);
                                          handleOnChangeQ2(index);
                                       }}
                                       className='p-2 form-check-input appearance-none cursor-pointer rounded-md border-2 border-red1 bg-white checked:ring-red-700 checked:ring-2 checked:bg-red-400 checked:border-white'
                                    />
                                    <span className='w-full ml-3 font-semibold text-md sm:text-lg lg:text-xl text-clip'>
                                       {Choice4_2[index].choice}
                                    </span>
                                 </label>
                              </li>
                           );
                        })}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};
export default ExaminationPage4;
