import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

const Nav = () => {

    const [stickyNav, setStickyNav] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        window.onscroll = () => {
            setStickyNav(window.pageYOffset === 0 ? false : true);
            return () => (window.onscroll = null);
        };
    }, []);

    return (<div className="flex justify-center items-center w-[100%] lg:w-full">
        <div className={`flex justify-center items-center mt-0 ${stickyNav ? 'font-sora top-0 z-50 mt-0 w-full lg:w-[100%] fixed' : 'mx-0 lg:mx-[30px] w-full lg:w-[90%]'} `}>
            <div className={`flex justify-between items-center bg-black h-[65px] px-8 font-sora absolute top-0 z-50  ${stickyNav ? 'lg:w-full font-sora top-0 z-50 mt-0 w-full fixed' : 'lg:mx-[30px] w-full mx-0 lg:w-[90%] mt-0 lg:mt-[19px]'} `}>
                <p className="lg:text-[30px] leading-[46px] text-white font-sora font-bold">Dez-folio.</p>

                <div>
                    <ul className=" hidden lg:flex justify-between gap-8 font-mulish text-[16px] text-gray-400">
                        <li className={`${router.asPath == "/#top" ? "text-white" : "hover:text-white"}`}><Link href='/#top'>Intro</Link></li>
                        <li className={`${router.asPath == "/#about-section" ? "text-white" : "hover:text-white"}`}><Link href='#about-section' >About</Link></li>
                        <li className={`${router.asPath == "/#work-section" ? "text-white" : "hover:text-white"}`}><Link href='#work-section'>Work</Link></li>
                        <li className={`${router.asPath == "/#contact-section" ? "text-white" : "hover:text-white"}`}><Link href='#contact-section'>Contact</Link></li>
                    </ul>

                    <div className="lg:hidden">
                        <img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682614431/white-hamburger-menu-icon-24_sq2li8.png" alt="" width="55px" />
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Nav;