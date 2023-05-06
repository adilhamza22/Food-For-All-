import React from "react";

const NGO = () => {
  const ngoList = [
    {
      id: 1,
      name: "Feeding America",
      location: "Chicago, IL",
      contact: "info@feedingamerica.org",
      hasFoodRequest: false,
    },
    {
      id: 2,
      name: "Food for the Hungry",
      location: "Phoenix, AZ",
      contact: "info@fh.org",
      hasFoodRequest: true,
    },
    {
      id: 3,
      name: "The Hunger Project",
      location: "New York, NY",
      contact: "info@thp.org",
      hasFoodRequest: false,
    },
    {
      id: 4,
      name: "Action Against Hunger",
      location: "New York, NY",
      contact: "info@actionagainsthunger.org",
      hasFoodRequest: true,
    },
    {
      id: 5,
      name: "Feeding Children Everywhere",
      location: "Longwood, FL",
      contact: "info@feedingchildreneverywhere.com",
      hasFoodRequest: false,
    },
    {
      id: 6,
      name: "Meals on Wheels America",
      location: "Arlington, VA",
      contact: "info@mowaa.org",
      hasFoodRequest: true,
    },
    {
      id: 7,
      name: "No Kid Hungry",
      location: "Washington, DC",
      contact: "info@nokidhungry.org",
      hasFoodRequest: true,
    },
  ];

  return (
    <div>
      <h2>List of NGOs:</h2>
      {ngoList.map((ngo) => (
        <div key={ngo.id}>
          <h3>{ngo.name}</h3>
          <p>
            <strong>Location:</strong> {ngo.location}
          </p>
          <p>
            <strong>Contact:</strong> {ngo.contact}
          </p>
          <p>
            <strong>Food Request:</strong>{" "}
            {ngo.hasFoodRequest ? "Yes" : "No"}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NGO;
