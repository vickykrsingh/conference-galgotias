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
    <section id="schedule" className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Event Schedule</h2>
      <div className="container mx-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Event</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{item.time}</td>
                <td className="px-4 py-2">{item.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Schedule;
