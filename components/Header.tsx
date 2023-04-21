import Link from "next/link";

const Header = () => {
  return (
    <>
      <div id="top" className="flex h-[800px] justify-between items-end bg-gray-200 pt-24 mb-32">
        <div className="w-[50%] text-start px-20  pb-32">
          <p className="text-red-700 tracking-[3px] text-[18px]">HELLO</p>
          <h1 className="font-sora text-[52px] leading-[74px] text-lightGray font-bold">
            I'm Desmond Fon, a web developer from Nigeria
          </h1>

          <div className="flex justify-start items-center gap-5 mt-10">
            <Link href="#about-section">
              <button className="w-[200px] h-[55px] text-[12px] bg-black text-white tracking-[4px]">
                MORE ABOUT ME
              </button>
            </Link>
            <Link href="#contact-section">
              <button className="w-[200px] h-[55px] text-[12px] border-[2px] border-black text-black tracking-[4px]">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
        <div className="w-[50%] relative">

          <div className="absolute bottom-32 left-[-50px] flex items-center">
            <div className="w-[100px] h-[2px] bg-white"></div>
            <Link target="_blank" href="https://drive.google.com/file/d/1Lk2OjKKvsi5Dl7Td3XbTTN5WA1tMXgH8/view?usp=share_link">
              <button className="w-[200px] h-[55px] text-[12px] border-[2px] border-white bg-black text-white tracking-[4px]">
                GET MY CV
              </button>
            </Link>
          </div>

          <img
            src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682092278/mee_g394i7.jpg"
            alt=""
          />
        </div>

      </div>
    </>
  );
};

export default Header;
