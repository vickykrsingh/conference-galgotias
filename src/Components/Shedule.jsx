import React from 'react';

const Schedule = () => {
  const scheduleData = [
    { time: '9:00 AM', event: 'Opening Ceremony' },
    { time: '10:00 AM', event: 'Keynote Speech by John Doe' },
    { time: '11:30 AM', event: 'Panel Discussion' },
    { time: '1:00 PM', event: 'Lunch Break' },
    { time: '2:00 PM', event: 'Workshop on AI & ML' },
    { time: '4:00 PM', event: 'Closing Remarks' },
  ];

  return (
    <section id="schedule" className="py-16 bg-gray-100 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-8">Event Schedule</h2>
      
      <div className="container mx-auto px-4 md:px-10 lg:px-28">
        <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="px-6 py-3">Time</th>
              <th className="px-6 py-3">Event</th>
            </tr>
          </thead>

          <tbody>
            {scheduleData.map((item, index) => (
              <tr
                key={index}
                className="border-t transition-colors duration-300 hover:bg-secondary hover:text-white"
              >
                <td className="px-6 py-3">{item.time}</td>
                <td className="px-6 py-3">{item.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
