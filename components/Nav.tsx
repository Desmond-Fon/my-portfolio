import Link from "next/link";

const Nav = () => {
    return (<div className="flex justify-center items-center">
        <div className="flex justify-between mt-[19px] items-center bg-black h-[65px] px-8 font-sora absolute top-0 z-50 w-[90%]">
            <p className="text-[30px] leading-[46px] text-white font-sora font-bold">Dez-folio</p>

            <div>
                <ul className="flex justify-between gap-8 font-mulish text-[16px] text-gray-300">
                    <li><Link href='#top'>Intro</Link></li>
                    <li><Link href='#about-section' scroll={true}>About</Link></li>
                    <li><Link href='#work-section'>Work</Link></li>
                    <li><Link href='#contact-section'>Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>);
}

export default Nav;