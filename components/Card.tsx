import { useState } from "react";
import Link from "next/link";

type CardProps = {
  description: string;
  code?: string | '';
  site: string;
  image: string;
}

const Card = ({ description, site, code, image }: CardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (<>
    <div className='w-[50%] border-[1px] relative' onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>
      {isHovering && (
        <div className="absolute bg-black/75 backdrop-sepia-0 text-white w-full h-full text-center flex justify-center items-center gap-4 flex-col px-6">
          <p>{description}</p>
          <div className="text-center flex justify-center items-center gap-4">
            <Link href={site}><button className="w-[150px] h-[40px] text-[12px] bg-white text-black tracking-[4px] font-medium  hover:bg-red-600 hover:text-white">Live Site</button></Link>
            {
              code && <Link href={code || ''}><button className="w-[150px] h-[40px] text-[12px] border-[2px] border-white text-white tracking-[4px] font-medium hover:bg-black hover:text-white">See Code</button></Link>
            }
          </div>

        </div>
      )}
      <img src={image} alt="" />
    </div>
  </>);
}

export default Card;