import Link from "next/link";

const Header = () => {
    return (<div className="flex justify-between mt-[19px] items-center">
        <p className="text-[30px] leading-[46px] text-darkGray font-sora font-bold">Dez-folio</p>

        <div>
            <ul className="flex justify-between gap-8 font-mulish text-[14px] text-linkColor">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/project'>Project</Link></li>
                <li><Link href='/aboutMe'>About me</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
            </ul>
        </div>
    </div>);
}

export default Header;