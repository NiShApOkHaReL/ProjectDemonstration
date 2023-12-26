import React from "react";
import garimaImage from "../../Image/garima.jpg";
import nishaImage from "../../Image/nisha.jpg";
import pradipImage from "../../Image/pradip.jpg";
import atithiImage from "../../Image/atithi.jpg";
import Navbar from "../../globals/components/navbar/Navbar";
import Footer from "../../globals/components/footer/Footer";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest'>
              OUR TEAM
            </h1>
            <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
              Hello! Allow us to introduce our exceptional team of four members
              who collaborate seamlessly to craft innovative solutions to
              various challenges. Together, we bring diverse skills and
              perspectives to the table, fostering a dynamic environment where
              creativity flourishes.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            {/* Repeat this block for each team member */}
            <div className='p-4 lg:w-1/2'>
              <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                <img
                  className='profile-photo rounded-full'
                  src={garimaImage}
                  alt={"Carlie Anglemire"}
                  style={{ width: "200px", height: "200px" }}
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    Garima Paudel
                  </h2>
                  <h3 className='text-gray-500 mb-3'>Backend Developer</h3>
                  <p className='mb-4'>
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      {/* Add your SVG content here */}
                    </a>
                    {/* Add more social media links as needed */}
                  </span>
                </div>
              </div>
            </div>
            {/* End of team member block */}
            {/* Repeat this block for each team member */}
            <div className='p-4 lg:w-1/2'>
              <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                <img
                  className='profile-photo rounded-full'
                  src={nishaImage}
                  alt={"Carlie Anglemire"}
                  style={{ width: "200px", height: "200px" }}
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    Nisha Pokharel
                  </h2>
                  <h3 className='text-gray-500 mb-3'>Frontend Developer</h3>
                  <p className='mb-4'>
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      {/* Add your SVG content here */}
                    </a>
                    {/* Add more social media links as needed */}
                  </span>
                </div>
              </div>
            </div>
            {/* End of team member block */}
            {/* Repeat this block for each team member */}
            <div className='p-4 lg:w-1/2'>
              <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                <img
                  className='profile-photo rounded-full'
                  src={pradipImage}
                  alt={"Carlie Anglemire"}
                  style={{ width: "200px", height: "200px" }}
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    Pradip Subedi
                  </h2>
                  <h3 className='text-gray-500 mb-3'>UI Developer</h3>
                  <p className='mb-4'>
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      {/* Add your SVG content here */}
                    </a>
                    {/* Add more social media links as needed */}
                  </span>
                </div>
              </div>
            </div>
            {/* End of team member block */}
            {/* Repeat this block for each team member */}
            <div className='p-4 lg:w-1/2'>
              <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                <img
                  className='profile-photo rounded-full'
                  src={atithiImage}
                  alt={"Carlie Anglemire"}
                  style={{ width: "200px", height: "200px" }}
                />
                <div className='flex-grow sm:pl-8'>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    Atithi Aryal
                  </h2>
                  <h3 className='text-gray-500 mb-3'>UI Developer</h3>
                  <p className='mb-4'>
                    DIY tote bag drinking vinegar cronut adaptogen squid fanny
                    pack vaporware.
                  </p>
                  <span className='inline-flex'>
                    <a className='text-gray-500'>
                      {/* Add your SVG content here */}
                    </a>
                    {/* Add more social media links as needed */}
                  </span>
                </div>
              </div>
            </div>
            {/* End of team member block */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
