import React from "react";
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
                                <img src="https://avatars.githubusercontent.com/u/105434198?v=4" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Sophia Ameh</p>
                                <p className="text-gray-500 text-base">Frontend developer</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p> I have worked with Desmond Fon as a colleague, he is a very detailed individual who is diligent about their work and super hardworking.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682548234/WhatsApp_Image_2023-04-26_at_23.27.18_hpwwzz.jpg" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Anigbogu Chioma </p>
                                <p className="text-gray-500 text-base">Co-Developer </p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>Desmond you are really good at what you do and in a short time you have been able to amass so much knowledge and that is impressive. I love your attention to detail and how you pull off complex designs with ease.
                            Well done I enjoyed working with you 👍.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://avatars.githubusercontent.com/u/100404175?v=4" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Marvelous Molokwu</p>
                                <p className="text-gray-500 text-base">Intern: nHub Foundation</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p> I started my tech journey in September 2022. It wasn&apos;t easy but I was lucky to have Desmond there because he wasn&apos;t only a friend but also a teacher. He is a really talented programmer and knows what he is doing.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 flex justify-center flex-col gap-10">
                        <div className="flex justify-start items-center gap-5">
                            <div className="rounded-full w-[60px] h-[60px]">
                                <img src="https://avatars.githubusercontent.com/u/112015287?v=4" alt="" width={'100%'} height={'100%'} />
                            </div>
                            <div className="text-left">
                                <p className="font-bold font-sora">Chiamaka Maduike</p>
                                <p className="text-gray-500 text-base">Frontend Developer</p>
                            </div>
                        </div>

                        <div className="text-left text-[18px]">
                            <p>You are determined and you definitely understand what you do. You have taught me a couple of times and without doubt, I was able to understand, that only shows that you are good at what you do.</p>
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

