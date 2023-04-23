import Card from "./Card";
import Testimonial from "./Testimonial";


const Work = () => {



  return (<div id='work-section' className="px-20 py-16">

    <div className=" relative z-0 mb-20">
      <p className="font-800 text-9xl opacity-10 tracking-wide">02</p>
      <div className="absolute inset-0 z-10 top-10">
        <p className="text-5xl font-bold tracking-widest font-sora text-lightGray">Selected Works.</p>
      </div>
    </div>

    <div className="flex justify-between flex-wrap">

      <Card description="Implemented the front-end part of nHub Nigeria's official website. It was implemented using react and CSS." site='https://nhubnigeria.ng/' image='https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239281/ScreenShot_Tool_-20230405063538_asgt9z.png' />

      <Card description="Collaborated with some developers to develop a site where businesses can register and advertise their products and services. It was implemented using Next JS and Chakra UI for styling." site='https://kasuwangizo.ng/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239293/Screenshot_from_2023-04-05_06-31-13_ryotfu.png" />

      <Card description="Currently working on an e-learning website headed by nHub Nigeria where users can create 'boxes', add participants, and also add learning content to the box. The progress of each participant can be viewed, as well as other information. It is built using React + Vite, and Chakra UI." site='https://pandora.nhubnigeria.ng/' image='https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239265/ScreenShot_Tool_-20230423093915_ttimlo.png' />

      <Card description="Collaborated with a developer to create a website that allowed users to track their goods or service in transit. Each user needs a unique tracking ID to see the current progress location of their parcel. It was implemented using HTML, CSS, and vanilla javascript." site='https://spinc-crystal.netlify.app/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239570/spinc_mtrhmz.png" code='https://github.com/Desmond-Fon/Shipper-App' />

      <Card description="Created a website where users can check out and search for any kind of movie or TV series. Used an API from 'The Movie Database' to fetch the movie data. It was built using React and Tailwind CSS." site='https://movie-website-alpha.vercel.app/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239743/movie_yp8fil.png" code="https://github.com/Desmond-Fon/movie-website" />

      <Card description="Built a website where a user can view all countries, search for a particular country, or filter countries by continent. A user can also see more information about a country by clicking on the country card. Used an API from 'REST Countries' to fetch the country data. It was built using React and Tailwind CSS." site='https://rest-country-search-app.netlify.app/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682240599/rest_bhnrvl.png" code='https://github.com/Desmond-Fon/rest-country-react' />

      <Card description="Developed a rock-paper-scissors game using React. It only allows a single player to play at a time, and it has a scoreboard that keeps a record of the current score of the player. It was built using React and tailwind CSS." site='https://desmond-fon.github.io/rock-paper-scissors-react/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682239934/rock_rqiftx.png" code='https://github.com/Desmond-Fon/rock-paper-scissors-react' />

      <Card description="Created an RGB color guesser game that gives the user a color and then gives multiple options with different RGB color codes for the user to select from. A user can toggle between easy and hard levels. It was built using React and Tailwind CSS." site='https://rgb-color-picking-game.netlify.app/' image="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682240918/color_mllalm.png" code='https://github.com/Desmond-Fon/color-picker' />

    </div>

    <div>
    <div className="flex justify-center items-center mt-32 mb-12">
        <p className="text-3xl font-bold tracking-widest font-sora text-lightGray">Hear It From Others.</p>

      </div>
        <div>
        <Testimonial />
        </div>
    </div>

  </div>);
}

export default Work;