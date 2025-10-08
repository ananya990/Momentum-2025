import React from 'react';

function EventDetails({ event }) {
  return (
    <div className="mt-8 flex justify-center">
      <div className="bg-[#5A100B] text-white rounded-lg shadow-lg p-6 
                w-full md:w-[600px] h-[500px] overflow-y-auto text-sm">

        <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
        <p className="mb-2 text-sm">
          <strong>Entry Fees:</strong> {event.entryFee}
        </p>
        <p className="mb-2 text-sm">
          <strong>Team Size:</strong> {event.teamSize}
        </p>
        <p className="mb-2 text-sm">
          <strong>Coordinators:</strong> {event.coordinators}
        </p>
        <p className="mb-4 text-sm">
          <strong>Contact:</strong> {event.contact}
        </p>

        <h3 className="font-semibold text-lg mb-2">Rules</h3>
        <ul className="list-disc list-inside space-y-1 mb-4 text-sm">
          {event.rule.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>

        <h3 className="font-semibold text-lg mb-2">Judging Criteria</h3>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {event.criteria.map((criteria, idx) => (
            <li key={idx}>{criteria}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EventDetails;