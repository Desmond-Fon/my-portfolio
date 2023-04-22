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

    return (<div className="flex justify-center items-center ">
        <div className={`flex justify-center items-center ${stickyNav ? 'font-sora top-0 z-50 mt-0 w-[100%] fixed' : ''} `}>
            <div className={`flex justify-between mt-[19px] items-center bg-black h-[65px] px-8 font-sora absolute top-0 z-50  ${stickyNav ? 'font-sora top-0 z-50 mt-0 w-[100%] fixed' : 'mx-[30px] w-[90%]'} `}>
                <p className="text-[30px] leading-[46px] text-white font-sora font-bold">Dez-folio.</p>

                <div>
                    <ul className="flex justify-between gap-8 font-mulish text-[16px] text-gray-400">
                        <li className={`${router.asPath == "/#top" ? "text-white" : "hover:text-white"}`}><Link href='/#top'>Intro</Link></li>
                        <li className={`${router.asPath == "/#about-section" ? "text-white" : "hover:text-white"}`}><Link href='#about-section' >About</Link></li>
                        <li className={`${router.asPath == "/#work-section" ? "text-white" : "hover:text-white"}`}><Link href='#work-section'>Work</Link></li>
                        <li className={`${router.asPath == "/#contact-section" ? "text-white" : "hover:text-white"}`}><Link href='#contact-section'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
}

export default Nav;