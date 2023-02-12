const ContactSection = () => {
   return (
      <div id='contact' className='bg-base-black w-full'>
         <div
            className='font-teko text-base-white text-5xl text-center tracking-widest lg:hidden my-8'
            data-aos='fade-down'
         >
            Contact
         </div>
         <div className='flex flex-row justify-between items-center overflow-x-hidden'>
            <div
               className="lg:bg-[url('/assets/frontPage/contact-bg-desktop.svg')] bg-[url('/assets/frontPage/contact-bg-mobile.svg')] lg:h-[100vh] h-[80vh] w-[50vw] bg-no-repeat bg-left bg-contain"
               data-aos='fade-right'
               data-aos-duration='1000'
            ></div>
            <div
               className='bg-base-white lg:rounded-[30px] rounded-l-[30px] lg:my-8 lg:mr-16 lg:p-16 p-6 h-fit'
               data-aos='fade-left'
               data-aos-duration='1000'
            >
               <div className='flex flex-col'>
                  <div className='font-teko xl:text-6xl md:text-4xl text-3xl text-red1 tracking-wider flex flex-row gap-3'>
                     <p>Address</p>
                     <svg
                        width='100%'
                        height='100%'
                        viewBox='0 0 35 54'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='xl:w-[35px] xl:h-[54px] lg:w-[25px] w-[17px]'
                     >
                        <path
                           d='M35 17.4896C35 27.1488 23.7903 43.1194 17.5 54C11.129 42.3134 0 27.1488 0 17.4896C0 7.83034 7.83502 0 17.5 0C27.165 0 35 7.83034 35 17.4896Z'
                           fill='#CA3450'
                        />
                        <ellipse
                           cx='17.4192'
                           cy='17.8925'
                           rx='12.7419'
                           ry='12.7343'
                           fill='#F6EFE9'
                        />
                     </svg>
                  </div>
                  <div className='font-bai-jamjuree xl:text-3xl md:text-2xl text-sm text-black'>
                     ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์
                     <br />
                     มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี
                     <br />
                     ชั้น 10 อาคารวิศววัฒนะ เลขที่ 126
                     <br />
                     ถ.ประชาอุทิศ แขวงบางมด เขตทุ่งครุ กรุงเทพฯ 10140
                  </div>
               </div>
               <div className='flex flex-row min-w-xl flex-wrap'>
                  <div className='lg:mt-12 mt-3 flex flex-col'>
                     <div className='font-teko xl:text-6xl md:text-4xl text-3xl text-red1 tracking-wider flex flex-row gap-3 items-center'>
                        <p>Contact</p>
                        <svg
                           width='100%'
                           height='100%'
                           viewBox='0 0 52 69'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           className='mb-3 xl:h-[52px] xl:w-[64px] lg:w-[30px] w-[22px]'
                        >
                           <rect
                              width='7.71412'
                              height='20.0181'
                              rx='3.85706'
                              transform='matrix(0.889884 -0.456188 0.460053 0.887891 13.7339 3.51953)'
                              fill='#CA3450'
                           />
                           <rect
                              width='7.48185'
                              height='20.4243'
                              rx='3.74093'
                              transform='matrix(0.895545 -0.44497 0.448789 0.893638 36.1333 47.9062)'
                              fill='#CA3450'
                           />
                           <path
                              d='M21.2839 21.1707L12.76 4.12163C12.6134 4.11283 10.9564 5.24252 5.50073 9.83173C-1.31889 15.5682 7.96026 34.7115 11.465 42.3856C14.9697 50.0597 19.8642 56.6466 28.0581 64.6026C34.6132 70.9673 41.3164 68.2775 43.8486 66.137L35.0404 48.9245C32.739 50.4935 26.6873 50.8518 20.8917 39.7326C15.096 28.6135 18.7383 22.725 21.2839 21.1707Z'
                              fill='#CA3450'
                           />
                        </svg>
                     </div>
                     <div className='font-bai-jamjuree xl:text-3xl md:text-2xl text-sm text-black flex flex-row lg:mr-14 mr-8 mt-2'>
                        <div className='flex flex-col justify-start'>
                           <p>พี่โม</p>
                           <p>พี่แพร์</p>
                           <p>พี่ยิม</p>
                           <p>พี่เบนซ์</p>
                        </div>
                        <div className='flex flex-col justify-start ml-12'>
                           <a href='tel:0661191914'>
                              <p>066 119 1914</p>
                           </a>
                           <a href='tel:0845449415'>
                              <p>084 544 9415</p>
                           </a>
                           <a href='tel:0983522011'>
                              <p>098 352 2011</p>
                           </a>
                           <a href='tel:0910730904'>
                              <p>091 073 0904</p>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className='flex flex-col lg:mt-12 mt-3'>
                     <p className='font-teko xl:text-6xl md:text-4xl text-3xl text-red1 tracking-wider'>
                        Social Media
                     </p>
                     <div className='font-bai-jamjuree xl:text-3xl md:text-2xl text-sm text-black flex flex-row mt-2'>
                        <div>
                           <div className='flex flex-row items-center'>
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 viewBox='0 0 50 50'
                                 width='100%'
                                 height='100%'
                                 className='lg:h-[60px] lg:w-[60px] h-[30px] w-[30px]'
                              >
                                 {" "}
                                 <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z' />
                              </svg>
                              <a href='https://www.facebook.com/KMUTTcomcamp' target='_blank'>
                                 <p>Comcamp KMUTT</p>
                              </a>
                           </div>
                           <div className='flex flex-row items-center'>
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 viewBox='0 0 30 30'
                                 width='100%'
                                 height='100%'
                                 className='lg:h-[60px] lg:w-[60px] h-[30px] w-[30px]'
                              >
                                 {" "}
                                 <path d='M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z' />
                              </svg>
                              <a href='https://www.instagram.com/comcamp.kmutt/' target='_blank'>
                                 <p>comcamp.kmutt</p>
                              </a>
                           </div>
                           <div className='flex flex-row items-center'>
                              <svg
                                 xmlns='http://www.w3.org/2000/svg'
                                 viewBox='0 0 30 30'
                                 width='100%'
                                 height='100%'
                                 className='lg:h-[60px] lg:w-[60px] h-[30px] w-[30px]'
                              >
                                 {" "}
                                 <path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z' />
                              </svg>
                              <a href='https://www.tiktok.com/@comcamp.kmutt' target='_blank'>
                                 <p>comcamp.kmutt</p>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactSection;
