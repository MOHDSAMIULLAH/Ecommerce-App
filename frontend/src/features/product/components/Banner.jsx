import React from 'react'


function Banner() {
  return (
<>
    <div className="px-6 py-12 text-center md:px-12 lg:text-left">
      <div className="w-full mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
        <div className="grid items-center lg:grid-cols-2">
          <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div className="block rounded-lg bg-opacity-55  px-6 py-12  dark:bg-black dark:bg-opacity-55 md:px-12 lg:-mr-14 backdrop-blur-xl">
              <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                The best offer <br />
                <span className="text-[#F4538A]">for you</span> <br />
                <div className="text-[#F5DD61] mt-8">50% Off</div>
              </h1>
              <a
                href="#!"
                className="mb-2 inline-block rounded bg-[#59D5E0] px-12 pt-3 pb-3 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-lg focus:bg-primary-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-lg dark:shadow-xl dark:hover:shadow-md dark:focus:shadow-md dark:active:shadow-md md:mr-2 md:mb-0"
                data-te-ripple-init
                data-te-ripple-color="light"
                role="button"
              >
                Shop Now
              </a>
              
            </div>
          </div>
          <div className="md:mb-12 lg:mb-0">
            <img
              src="https://res.cloudinary.com/dc4gfoeno/image/upload/v1711048398/ecommerce/oa2tx3ajgjwgbnzw8mko.jpg"
              className="w-full rounded-lg  dark:shadow-md"
              alt=""
            />
            {/* <img
              src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/004.jpg"
              className="w-full rounded-lg shadow-lg dark:shadow-md"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
        <div>
            <img src="https://res.cloudinary.com/dc4gfoeno/image/upload/v1711048396/ecommerce/i45npap8cp5jzpwty5pr.jpg" alt="" />
        </div>
    </>
  )
}

export default Banner