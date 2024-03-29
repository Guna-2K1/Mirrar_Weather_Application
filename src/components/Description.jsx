import React from 'react';
import './Description.css';
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';

const Description = ({ weather, units }) => {
  if (!weather) {
    // Handle the case when weather data is not available yet
    return <p>Loading...</p>; // You can customize this with a loading indicator or message
  }

  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'm/h';

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: 'min',
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: 'max',
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: 'feels like',
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: 'pressure',
      data: weather.pressure,
      unit: 'hPa',
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: 'humidity',
      data: weather.humidity,
      unit: '%',
    },
    {
      id: 6,
      icon: <FaWind />,
      title: 'Wind speed',
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="section section__Description">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <div className="Description__card-icon">
            {card.icon}
            <small>{card.title}</small>
          </div>
          <h2>
            {card.data} {card.unit}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Description;
