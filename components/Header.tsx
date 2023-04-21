import Link from "next/link";

const Header = () => {
  return (
    <>
      <div id="top" className="flex h-[800px] justify-between items-end bg-gray-200 pt-24 mb-32">
        <div className="w-[50%] text-start px-20  pb-32">
          <p className="text-red-700 tracking-[3px] text-[18px] font-medium">HELLO</p>
          <h1 className="font-sora text-[52px] leading-[74px] text-lightGray font-bold">
            I'm Desmond Fon, a web developer from Nigeria.
          </h1>

          <div className="flex justify-start items-center gap-5 mt-10">
            <Link href="#about-section">
              <button className="w-[200px] h-[55px] text-[12px] bg-black text-white tracking-[4px] font-medium">
                MORE ABOUT ME
              </button>
            </Link>
            <Link href="#contact-section">
              <button className="w-[200px] h-[55px] text-[12px] border-[2px] border-black text-black tracking-[4px] font-medium">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[50%] relative">

          <div className="absolute bottom-32 left-[-50px] flex items-center">
            <div className="w-[100px] h-[2px] bg-white"></div>
            <Link target="_blank" href="https://drive.google.com/file/d/1Lk2OjKKvsi5Dl7Td3XbTTN5WA1tMXgH8/view?usp=share_link">
              <button className="w-[200px] h-[55px] text-[12px] border-[2px] border-white bg-black text-white tracking-[4px] font-medium">
                GET MY CV
              </button>
            </Link>
          </div>

          <img
            src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682092278/mee_g394i7.jpg"
            alt=""
          />

          <div className="flex flex-col gap-[20px] absolute right-9 bottom-16 items-center">
            <Link target="_blank" href={'https://github.com/Desmond-Fon'}><img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682110934/github_mcxchp.png" alt="" width={'25px'} height={'25px'} /></Link>
            <Link target="_blank" href={'https://www.linkedin.com/in/desmond-fon/'}><img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682110934/linkedin_cznonr.png" alt="" width={'25px'} height={'25px'} /></Link>
            <Link target="_blank" href={'https://twitter.com/DezmondFon'}><img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682110934/twitter_1_of7qnt.png" alt="" width={'25px'} height={'25px'} /></Link>
            <Link target="_blank" href={'https://www.instagram.com/dezmond_fon/'}><img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682110933/instagram_1_zq27wr.png" alt="" width={'25px'} height={'25px'} /></Link>
            <Link target="_blank" href={'https://wa.me/07017111908'}><img src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682111681/whatsapp_nkpv8t.png" alt="" width={'25px'} height={'25px'} /></Link>
            <div className="w-[2px] h-[80px] bg-white"></div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Header;
