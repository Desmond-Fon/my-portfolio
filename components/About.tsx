const About = () => {
    return (<>
        <div id="about-section" className="px-5 lg:px-20 pt-16 pb-7 lg:pb-16">
            <div className=" relative z-0">
                <p className="font-800 text-8xl md:text-9xl opacity-10 tracking-wide">01</p>
                <div className="absolute inset-0 z-10 top-8 md:top-10">
                    <p className="text-3xl md:text-5xl font-bold tracking-widest font-sora text-lightGray">About Me.</p>
                </div>
            </div>

            <p className="mt-8 lg:mt-14 text-[16px] md:text-[20px] lg:text-[23px] leading-6 lg:leading-9 font-mulish">My name is Fon Desmond Gwom. I am currently pursuing a degree in Computer Science, with a focus on frontend development. Through my coursework, I have gained experience in HTML, CSS, JavaScript, and various frontend frameworks and libraries such as React, Next JS, tailwind CSS, chakra UI. I have also completed several personal projects that have allowed me to hone my skills and gain practical experience in building responsive and user-friendly web applications.</p>
            <p className="mt-8 lg:mt-14 text-[16px] lg:text-[23px] md:text-[20px] leading-6 lg:leading-9 font-mulish">Furthermore, I am highly proficient in using various frontend tools and technologies, such as Git and Github, Webpack, and Babel, to optimize website performance and enhance user experience. I am also familiar with Agile methodologies and have experience working in collaborative environments using tools such as Jira, Trello and Asana. I am a fast learner, able to work independently as well as in a team, and always willing to go the extra mile to ensure that projects are completed on time and to the highest quality standards.</p>

            <div className="mt-[80px] flex
            gap-[10%] font-sora flex-wrap">
                <div className='mb-[30px]'>
                    <p className="text-xl md:text-2xl text-gray-800 border-l-[3px] border-red-500 px-3 mb-8 font-bold">Experience</p>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">nHub Foundation</p>
                        <p className="text-gray-500">Intern</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">nHub Foundation</p>
                        <p className="text-gray-500">Tutor (SevoCoder)</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">nHub Foundation</p>
                        <p className="text-gray-500">Frontend Tutor</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">nHub Nigeria</p>
                        <p className="text-gray-500">Master Trainer</p>
                    </div>
                </div>

                <div className='mb-[30px]'>
                    <p className="text-xl md:text-2xl text-gray-800 border-l-[3px] border-red-500 px-3 mb-8 font-bold">Education</p>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Abubakar Tafawa <br /> Balewa University,<br /> Bauchi.</p>
                        <p className="text-gray-500">Computer Science</p>
                    </div>
                </div>

                <div className='mb-[30px]'>
                    <p className="text-xl md:text-2xl text-gray-800 border-l-[3px] border-red-500 px-3 mb-8 font-bold">Languages</p>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Javascript</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">HTML</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">CSS</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Typescript</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl"></p>
                    </div><div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Git and Github</p>
                    </div>
                </div>

                <div>
                    <p className="text-xl md:text-2xl text-gray-800 border-l-[3px] border-red-500 px-3 mb-8 font-bold">Frameworks & Tools</p>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">React</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Next JS</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Tailwind CSS</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Chakra UI</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Trello, Jira, Asana</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Redux</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Figma</p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl"></p>
                    </div>
                    <div className="mb-5">
                        <p className="text-[16px] md:text-[18px] lg:text-xl">Bootstrap</p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default About;