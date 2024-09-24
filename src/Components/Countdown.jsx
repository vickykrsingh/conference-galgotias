import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold">Event will start in</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center mt-8 px-4 md:px-10 lg:px-28">
          <div className='w-full bg-neutral-300 shadow-lg rounded-md flex flex-col gap-2 text-primary hover:text-white hover:bg-secondary duration-300'>
            <span className='font-bold text-5xl sm:text-6xl px-4 py-4 sm:px-6 sm:pt-6'>{days}</span>
            <span className='pb-4 text-xl sm:text-2xl'>Days</span>
          </div>
          <div className='w-full bg-neutral-300 shadow-lg rounded-md flex flex-col gap-2 text-primary hover:text-white hover:bg-secondary duration-300'>
            <span className='font-bold text-5xl sm:text-6xl px-4 py-4 sm:px-6 sm:pt-6'>{hours}</span>
            <span className='pb-4 text-xl sm:text-2xl'>Hours</span>
          </div>
          <div className='w-full bg-neutral-300 shadow-lg rounded-md flex flex-col gap-2 text-primary hover:text-white hover:bg-secondary duration-300'>
            <span className='font-bold text-5xl sm:text-6xl px-4 py-4 sm:px-6 sm:pt-6'>{minutes}</span>
            <span className='pb-4 text-xl sm:text-2xl'>Minutes</span>
          </div>
          <div className='w-full bg-neutral-300 shadow-lg rounded-md flex flex-col gap-2 text-primary hover:text-white hover:bg-secondary duration-300'>
            <span className='font-bold text-5xl sm:text-6xl px-4 py-4 sm:px-6 sm:pt-6'>{seconds}</span>
            <span className='pb-4 text-xl sm:text-2xl'>Seconds</span>
          </div>
        </div>
        <button className="bg-primary hover:bg-secondary roumd text-white mt-6 px-6 py-3 hover:bg-accent-dark transition duration-300">
          Add to Calendar
        </button>
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
