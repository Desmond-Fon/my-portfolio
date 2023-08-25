import Card from "./Card";
import Testimonial from "./Testimonial";


const Work = () => {



  return (<div id='work-section' className="px-5 md:px-10 lg:px-20 pt-7 pb-7 md:pb-16 lg:pt-16 lg:pb-16">

    <div className=" relative z-0 mb-20">
      <p className="font-800 text-8xl md:text-9xl opacity-10 tracking-wide">02</p>
      <div className="absolute inset-0 z-10 top-8 md:top-10">
        <p className="text-3xl md:text-5xl font-bold tracking-widest font-sora text-lightGray">Selected Works.</p>
      </div>
    </div>

    <div className="flex gap-4 lg:gap-0 justify-center lg:justify-between flex-wrap">

      <Card description="Implemented the front-end part of nHub Nigeria's official website. It was implemented using react and CSS." site='https://nhubnigeria.ng/' image='https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239281/ScreenShot_Tool_-20230405063538_asgt9z.png' />

      <Card description="Collaborated with some developers to develop a site where businesses can register and advertise their products and services. It was implemented using Next JS and Chakra UI for styling." site='https://kasuwangizo.ng/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239293/Screenshot_from_2023-04-05_06-31-13_ryotfu.png" />

      <Card description="Currently working on an e-learning website headed by nHub Nigeria where users can create 'boxes', add participants, and also add learning content to the box. The progress of each participant can be viewed, as well as other information. It is built using React + Vite, and Chakra UI." site='https://pandora.nhubnigeria.ng/' image='https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239265/ScreenShot_Tool_-20230423093915_ttimlo.png' />

      <Card description="Collaborated with a developer to create a website that allowed users to track their goods or service in transit. Each user needs a unique tracking ID to see the current progress location of their parcel. It was implemented using HTML, CSS, and vanilla javascript." site='https://spinc-crystal.netlify.app/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239570/spinc_mtrhmz.png" code='https://github.com/Desmond-Fon/Shipper-App' />

      <Card description="Built the frontend aspect of a photography website, which
included an overview, a gallery, a contact section and booking service. It was built using React and Tailwind CSS." site='https://ymastudios.live/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1692922574/ScreenShot_Tool_-20230825011422_fvqitz.png" />

      <Card description="Maintaining and upgrading the frontend aspect of the official
website of eliest lotto." site='https://www.eliestlotto.biz/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1692922570/ScreenShot_Tool_-20230825011354_vlmnwh.png" />

      <Card description="Collaborated with a developer to build a site that registers business names, companies and incorporation for users. It accepts payment in cash and crypto. It was built using React and tailwind CSS." site='https://sociabrander.netlify.app' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1692922575/ScreenShot_Tool_-20230825011443_eevbmx.png" />

      <Card description="Supervised and contributed to the building of nHub Foundation website. It was built using react and tailwind CSS." site='https://nhubfoundation.org/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1692923408/ScreenShot_Tool_-20230825012759_trt9rg.png" />

    </div>

    <div>
      <div className="flex justify-center items-center mt-32 mb-12">
        <p className="text-3xl font-bold tracking-widest font-sora text-lightGray text-center lg:text-left">Hear It From Others.</p>

      </div>
      <div>
        <Testimonial />
      </div>
    </div>

  </div>);
}

export default Work;