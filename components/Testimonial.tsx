// // import { Link } from "react-router-dom";
// // import { Carousel } from "flowbite-react";
// import { Virtual } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/virtual";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";


// const Testimonial = () => {
//   return (
//     <div className="mb-10 bg-slate-400 flex justify-center items-center">
//       <Swiper
//         spaceBetween={1}
//         slidesPerView={2}
//         virtual
//         modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
//         navigation
//         autoplay={true}
//         pagination={{ clickable: true }}
//         scrollbar={{ draggable: true }}
//         className="mb-10 bg-slate-400 flex justify-center items-center"
//         // onSwiper={(swiper) => console.log(swiper)}
//         // onSlideChange={() => console.log("slide change")}
//       >

//           <SwiperSlide  className="mb-10 bg-slate-400 flex justify-center items-center">
//             <div className="h-[400px] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita, deserunt saepe consequatur quidem quia alias recusandae est culpa ratione magnam id explicabo nostrum rem optio voluptatibus sapiente minima? A.</div>
//           </SwiperSlide>
//           <SwiperSlide  className="mb-10 bg-slate-400 flex justify-center items-center">
//             <div className="h-[400px] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita, deserunt saepe consequatur quidem quia alias recusandae est culpa ratione magnam id explicabo nostrum rem optio voluptatibus sapiente minima? A.</div>
//           </SwiperSlide>
//           <SwiperSlide  className="mb-10 bg-slate-400 flex justify-center items-center">
//             <div className="h-[400px] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita, deserunt saepe consequatur quidem quia alias recusandae est culpa ratione magnam id explicabo nostrum rem optio voluptatibus sapiente minima? A.</div>
//           </SwiperSlide>
//           <SwiperSlide  className="mb-10 bg-slate-400 flex justify-center items-center">
//             <div className="h-[400px] text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, expedita, deserunt saepe consequatur quidem quia alias recusandae est culpa ratione magnam id explicabo nostrum rem optio voluptatibus sapiente minima? A.</div>
//           </SwiperSlide>

//       </Swiper>
// </div>
//   );
// };

// export default Testimonial;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default function Testimonial() {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample.jpg" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Desmond Fon</p>
                                <p className="text-gray-500 text-base">hiring manager</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus rerum consequatur vero deleniti tempore, saepe dicta hic necessitatibus accusantium incidunt error esse explicabo eum blanditiis dolorum asperiores perspiciatis odio?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample.jpg" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Desmond Fon</p>
                                <p className="text-gray-500 text-base">hiring manager</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus rerum consequatur vero deleniti tempore, saepe dicta hic necessitatibus accusantium incidunt error esse explicabo eum blanditiis dolorum asperiores perspiciatis odio?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample.jpg" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Desmond Fon</p>
                                <p className="text-gray-500 text-base">hiring manager</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus rerum consequatur vero deleniti tempore, saepe dicta hic necessitatibus accusantium incidunt error esse explicabo eum blanditiis dolorum asperiores perspiciatis odio?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample.jpg" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Desmond Fon</p>
                                <p className="text-gray-500 text-base">hiring manager</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus rerum consequatur vero deleniti tempore, saepe dicta hic necessitatibus accusantium incidunt error esse explicabo eum blanditiis dolorum asperiores perspiciatis odio?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample.jpg" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Desmond Fon</p>
                                <p className="text-gray-500 text-base">hiring manager</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus rerum consequatur vero deleniti tempore, saepe dicta hic necessitatibus accusantium incidunt error esse explicabo eum blanditiis dolorum asperiores perspiciatis odio?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample.jpg" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Desmond Fon</p>
                                <p className="text-gray-500 text-base">hiring manager</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus rerum consequatur vero deleniti tempore, saepe dicta hic necessitatibus accusantium incidunt error esse explicabo eum blanditiis dolorum asperiores perspiciatis odio?</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1678888079/cld-sample.jpg" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Desmond Fon</p>
                                <p className="text-gray-500 text-base">hiring manager</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus rerum consequatur vero deleniti tempore, saepe dicta hic necessitatibus accusantium incidunt error esse explicabo eum blanditiis dolorum asperiores perspiciatis odio?</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

