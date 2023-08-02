import Link from "next/link";

const Header = () => {
  return (
    <>
      <div id="top" className="lg:flex lg:h-[800px] md:h-[700px] lg:justify-between justify-center lg:items-end lg:bg-gray-200 lg:mb-32 lg:w-[100%] lg:bg-[url('')] bg-[url('https://res.cloudinary.com/dvikxcdh3/image/upload/v1682092278/mee_g394i7.jpg')] bg-center bg-cover w-full md:w-full min-h-[100%] h-[650px]">
        <div className="lg:w-[50%] w-[100wh] lg:text-start lg:px-20 lg:pt-44 lg:pb-32 pt-64 text-center mb-[57px]">
          <p className="lg:text-red-700 text-white tracking-[3px] text-[14px] lg:text-[18px] lg:font-medium text-center lg:text-left font-bold">HELLO</p>
          <h1 className="font-sora text-[28px] lg:text-[52px] leading-[30px] lg:leading-[74px] lg:text-lightGray font-bold px-5">
            I'm Desmond Fon, a web developer from Nigeria.
          </h1>

          <div className="flex flex-col lg:flex-row lg:justify-start items-center gap-5 mt-10">
            <Link href="#about-section">
              <button className="w-[200px] h-[55px] text-[12px] bg-black text-white tracking-[4px] font-medium hover:bg-red-700">
                MORE ABOUT ME
              </button>
            </Link>
            <Link href="#contact-section">
              <button className=" bg-white w-[200px] h-[55px] lg:bg-transparent text-[12px] border-[2px] border-black text-black font-extrabold lg:text-black tracking-[4px] lg:font-medium hover:bg-black hover:text-white">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[50%] h-[100%] relative">

          <div className="hidden absolute bottom-[185px] left-[-50px] lg:flex items-center">
            <div className="w-[100px] h-[2px] bg-white"></div>
            <Link target="_blank" href="https://drive.google.com/file/d/1i1-E1eoDzjL0nY_phL6cgkhBxITpO5dS/view?usp=sharing">
              <button className="w-[200px] h-[55px] text-[12px] border-[2px] border-white bg-black text-white tracking-[4px] font-medium hover:bg-white hover:text-black">
                GET MY CV
              </button>
            </Link>
          </div>

          <div className="lg:hidden relative">
            <div className="w-[25px] h-[2px] bg-white absolute top-[26px] left-2"></div>
            <Link target="_blank" href="https://drive.google.com/file/d/1i1-E1eoDzjL0nY_phL6cgkhBxITpO5dS/view?usp=sharing" className="mt-24">
              <button className="w-[200px] h-[55px] text-[12px] text-white tracking-[4px] font-bold hover:bg-white hover:text-black">
                GET MY CV
              </button>
            </Link>
          </div>

          <div className="w-full h-full hidden lg:block">
            <img
              src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682092278/mee_g394i7.jpg"
              alt="" className="w-full h-full"
            />
          </div>

          <div className="hidden lg:flex flex-col gap-[20px] absolute right-9 bottom-16 items-center">
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
