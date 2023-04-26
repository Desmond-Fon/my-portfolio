import Link from "next/link";

const Contact = () => {
    return (<div id="contact-section" className="px-20 py-16 bg-black pt-32">
        <div className=" relative z-0">
            <p className="font-800 text-9xl opacity-10 tracking-wide text-white">03</p>
            <div className="absolute inset-0 z-10 top-10">
                <p className="text-5xl font-bold tracking-widest font-sora text-white">Get In Touch.</p>
            </div>
        </div>

        <div className="flex justify-between items-end mt-[80px] font-mulish text-[23px] gap-10">
            <div className="text-gray-400 w-1/2">
                <p className="mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim illo quisquam nobis laudantium dolorum, accusantium nihil veniam, cumque beatae vel sapiente, aperiam recusandae reprehenderit odio placeat mollitia architecto error quae!</p>

                <Link target="_blank" href={"mailto:desmondfon@yahoo.com?subject=Mail to Desmond"} className="hover:text-white">
                    <button className="w-full h-[65px] text-[16px] bg-red-600 text-white tracking-[6px] font-bold hover:bg-red-500 hover:text-white">
                        MESSAGE ME
                    </button>
                </Link>

            </div>

            <div className="text-gray-400 w-1/2">
                <div className="flex justify-start gap-32 mb-10">
                    <div>
                        <p className="font-sora pb-5 text-white">Follow Me</p>

                        <p className="text-[20px]"><Link target='_blank' href='https://github.com/Desmond-Fon' className="hover:text-white"> Github</Link></p>
                        <p className="text-[20px]"><Link target='_blank' href='https://www.linkedin.com/in/desmond-fon/' className="hover:text-white">LinkedIn</Link></p>
                        <p className="text-[20px]"><Link target='_blank' href='https://twitter.com/DezmondFon' className="hover:text-white">Twitter</Link></p>
                        <p className="text-[20px]"><Link target='_blank' href='https://www.instagram.com/dezmond_fon/' className="hover:text-white"> Instagram</Link></p>
                        <p className="text-[20px]"><Link target='_blank' href='https://wa.me/07017111908' className="hover:text-white"> Whatsapp</Link></p>
                    </div>

                    <div>
                        <p className="font-sora pb-5 text-white">Contact Me</p>

                        <p className="text-[20px]"><Link target="_blank" href={"mailto:desmondfon@yahoo.com?subject=Mail to Desmond"} className="hover:text-white">desmondfon@yahoo.com</Link></p>
                        <p className="text-[20px]"><Link target="_blank" href={"mailto:dezmondfon@gmail.com?subject=Mail to Fon"} className="hover:text-white">dezmondfon@gmail.com</Link></p>
                        <p className="text-[20px]">+234 701 711 1908</p>

                    </div>
                </div>
                <Link target="_blank" href="https://drive.google.com/file/d/1Lk2OjKKvsi5Dl7Td3XbTTN5WA1tMXgH8/view?usp=share_link">
                    <button className="w-full h-[65px] text-[16px] border-[2px] border-white bg-black text-white tracking-[6px] font-bold hover:bg-white hover:text-black">
                        GET MY CV
                    </button>
                </Link>
            </div>
        </div>


    </div>);
}

export default Contact;