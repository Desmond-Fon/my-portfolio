import Link from "next/link";

const Contact = () => {
    return (<div id="contact-section" className="px-5 md:px-10 lg:px-20 py-16 bg-black pt-32">
        <div className=" relative z-0">
            <p className="font-800 text-8xl md:text-9xl opacity-10 tracking-wide text-white">03</p>
            <div className="absolute inset-0 z-10 top-8 md:top-10">
                <p className="text-3xl md:text-5xl font-bold tracking-widest font-sora text-white">Get In Touch.</p>
            </div>
        </div>

        <div className="flex justify-start items-start lg:justify-between lg:items-end mt-[80px] font-mulish text-[18px] md:text-[22px] lg:text-[23px] leading-6 md:leading-9 gap-10 mb-12 flex-col lg:flex-row">
            <div className="text-gray-400 lg:w-1/2">
                <p className="mb-2">Thank you for taking the time to visit my developer portfolio. I'm thrilled that you are interested in learning more about my work.
                </p>
                <p className="mb-2">I'm always looking for new opportunities to collaborate with like-minded individuals and companies. If you have a project in mind, or simply want to say hello, please don't hesitate to get in touch with me.</p>
                <p className="mb-10">I'm confident that my skills and experience will be a valuable asset to any project, and I look forward to hearing from you soon.</p>
            </div>

            <div className="text-gray-400 lg:w-1/2">
                <div className="flex flex-col lg:flex-row lg:justify-end gap-10 lg:gap-32 mb-10">
                    <div>
                        <p className="font-sora pb-5 text-white">Follow Me</p>

                        <p className="text-[20px] pb-2"><Link target='_blank' href='https://github.com/Desmond-Fon' className="hover:text-white"> Github</Link></p>
                        <p className="text-[20px] pb-2"><Link target='_blank' href='https://www.linkedin.com/in/desmond-fon/' className="hover:text-white">LinkedIn</Link></p>
                        <p className="text-[20px] pb-2"><Link target='_blank' href='https://twitter.com/DezmondFon' className="hover:text-white">Twitter</Link></p>
                        <p className="text-[20px] pb-2"><Link target='_blank' href='https://www.instagram.com/dezmond_fon/' className="hover:text-white"> Instagram</Link></p>
                        <p className="text-[20px] pb-2"><Link target='_blank' href='https://wa.me/07017111908' className="hover:text-white"> Whatsapp</Link></p>
                    </div>

                    <div>
                        <p className="font-sora pb-5 text-white">Contact Me</p>

                        <p className="text-[20px] pb-2"><Link target="_blank" href={"mailto:desmondfon@yahoo.com?subject=Mail to Desmond"} className="hover:text-white">desmondfon@yahoo.com</Link></p>
                        <p className="text-[20px] pb-2"><Link target="_blank" href={"mailto:dezmondfon@gmail.com?subject=Mail to Fon"} className="hover:text-white">dezmondfon@gmail.com</Link></p>
                        <p className="text-[20px] pb-2"><Link href="tel:07017111908" className="hover:text-white">+234 701 711 1908</Link></p>

                    </div>
                </div>
            </div>

        </div>

        <div className="flex justify-center lg:justify-between items-end font-mulish text-[23px] gap-10 mb-24 flex-col lg:flex-row">

            <Link target="_blank" href={"mailto:desmondfon@yahoo.com?subject=Mail to Desmond"} className="hover:text-white w-full lg:w-1/2">
                <button className="w-full h-[65px] text-[16px] bg-red-600 text-white tracking-[6px] font-bold hover:bg-red-500 hover:text-white">
                    MESSAGE ME
                </button>
            </Link>

            <Link target="_blank" href="https://drive.google.com/file/d/18K0eW04-M4-T34ILKWihXCXfoTmilkhr/view?usp=sharing" className="w-full lg:w-1/2">
                <button className="w-full h-[65px] text-[16px] border-[2px] border-white bg-black text-white tracking-[6px] font-bold hover:bg-white hover:text-black">
                    GET MY CV
                </button>
            </Link>
        </div>

        <div className="w-full h-[1px] bg-gray-600"></div>

        <div className="text-gray-400 pt-12 lg:text-right flex gap-5 lg:gap-10 justify-start flex-col lg:flex-row lg:justify-end">
            <p>© Copyright Hudson 2023</p>
            <p> Built by Fon Desmond 😁❤️</p>
        </div>

    </div>);
}

export default Contact;
