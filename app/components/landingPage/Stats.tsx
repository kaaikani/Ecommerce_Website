import React from 'react';

const Stats = () => {
  return (
    <>
      <div id="Testimonials" className="scroll-mt-32 mx-auto my-12 max-w-7xl px-6 sm:mt-28 lg:px-8">
        <div className="mx-auto lg:mx-0 sm:text-center justify-center">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-[900] w-full text-center uppercase text-green-950 mb-4"  >
            Deliverin
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            At Kaaikani, we take pride in bringing fresh fruits and vegetables straight from farms to homes. 
            Here's a glimpse of what we've achieved with your trust.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">

          {/* Customers */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-green-100 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-green-900">30,000+</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-green-900">Happy Customers</p>
              <p className="mt-2 text-base leading-7 text-green-800">
                Thousands of households rely on Kaaikani for their daily fresh produce.
              </p>
            </div>
          </div>

          {/* Products Sold */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-green-800 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">1.2M+</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">Fresh Items Delivered</p>
              <p className="mt-2 text-base leading-7 text-green-200">
                From seasonal fruits to everyday vegetables, we've delivered over a million items — fresh and on time.
              </p>
            </div>
          </div>

          {/* Orders */}
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-lime-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">40,000+</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">Orders Fulfilled</p>
              <p className="mt-2 text-base leading-7 text-lime-100">
                Every order we deliver supports local farmers and brings nutrition to your table.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Stats;
