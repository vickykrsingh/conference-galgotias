import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = ({ date }) => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="text-center py-16">
        <h2 className="text-3xl font-bold">Event will start in:</h2>
        <div className="flex justify-center space-x-4 mt-4">
          <div className='bg-neutral-300 shadow-lg rounded-md flex flex-col gap-2 text-secondary hover:text-white hover:bg-secondary duration-300'><span className=' font-bold text-6xl px-6 pt-6'>{days}</span><span className='pb-4 text-2xl'>Days</span></div>
          <div className='bg-neutral-300 shadow-lg rounded-md flex flex-col gap-2 text-secondary hover:text-white hover:bg-secondary duration-300'><span className=' font-bold text-6xl px-6 pt-6'>{hours}</span><span className='pb-4 text-2xl '>Days</span></div>
          <div className='bg-neutral-300 shadow-lg rounded-md flex flex-col gap-2 text-secondary hover:text-white hover:bg-secondary duration-300'><span className=' font-bold text-6xl px-6 pt-6'>{minutes}</span><span className='pb-4 text-2xl'>Days</span></div>
          <div className='bg-neutral-300 shadow-lg rounded-md flex flex-col gap-2 text-secondary hover:text-white hover:bg-secondary duration-300'><span className=' font-bold text-6xl px-6 pt-6'>{seconds}</span><span className='pb-4 text-2xl'>Days</span></div>
        </div>
        <button className="bg-accent text-white mt-6 px-4 py-2">Add to Calendar</button>
      </div>
    );
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
