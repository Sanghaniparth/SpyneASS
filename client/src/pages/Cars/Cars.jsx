import React, { useState, useEffect } from 'react';
import { getCars, deleteCar } from '../../service/api';
import './cars.css';
import 'animate.css';

const temp = [
  {
    id: 0,
    Car_name: '',
    Brand_name: '',
    Prize: 0,
    manufacturing_Date: '',
  },
];
const Cars = () => {
  const [cars, setCars] = useState(temp);

  useEffect(() => {
    getAllCars();
  }, []);

  const getAllCars = async () => {
    let response = await getCars();
    setCars(response.data);
  };

  const deleteCarFromCollection = async (id) => {
    const response = await deleteCar(id);
    document.querySelector('.modal-text').textContent = response.data.message;
    document.querySelector('.modal').classList.toggle('hide-modal');
  };

  const closeModal = () => {
    document.querySelector('.modal').classList.toggle('hide-modal');
  };

  return (
    <section className='cars-page animate__animated animate__backInDown'>
      <h1>Cars Collection</h1>

      <div className='cars-container '>
        <div className='modal hide-modal animate__animated animate__tada'>
          <button className='close-btn' onClick={closeModal}>
            X
          </button>
          <p className='modal-text'></p>
          <a href='/cars'>
            <button className='nav-back-btn'>Back to Collection</button>
          </a>
        </div>
        {cars.length > 0 ? (
          cars.map((car) => (
            <div className='car-card'>
              <div className='car-card-header'>
                <h2>
                Car Name: <span className='light-text'>{car.Car_name}</span>
                </h2>
                <h3>
                Brand Name: <span className='light-text'>{car.Brand_name}</span>
                </h3>
                <h4>
                Prize: <span className='light-text'>{car.Prize}</span>
                </h4>
                <h4>
                Manufacturing Date: <span className='light-text'>{car.manufacturing_Date}</span>
                </h4>
              </div>
              <div className='car-card-buttons'>
                <a href={`cars/editCar/${car.id}`}>
                  <button className='car-card-button edit-btn'>Edit</button>
                </a>
                <button className='car-card-button remove-btn' onClick={() => deleteCarFromCollection(car.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className='car-card'>
            <div className='car-card-header'>
              <h2 className='light-text'>Collection is Empty!</h2>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cars;
