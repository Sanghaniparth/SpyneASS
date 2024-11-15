import React, { useState, useEffect } from 'react';
import {useParams } from 'react-router-dom';
import { getCar, editCar } from '../../service/api';
import 'animate.css';

const temp = {
  id: 0,
  Car_name: '',
  Brand_name: '',
  Prize: 0,
  manufacturing_Date: '',
};

const EditCar = () => {
  const [car, setCar] = useState(temp);
  const { id } = useParams();

  useEffect(() => {
    loadCarDetails(id);
  }, [id]);

  const loadCarDetails = async (id) => {
    const response = await getCar(id);
    setCar(response.data);
  };
  console.log(car);
  const onValueChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const updateNewCar = async () => {
    const response = await editCar(car);
    document.querySelector('.modal-text').textContent = response.data.message;
    document.querySelector('.modal').classList.toggle('hide-modal');
  };

  const closeModal = () => {
    document.querySelector('.modal').classList.toggle('hide-modal');
  };
  return (
    <section>
      <div className='form-container animate__animated animate__backInDown'>
        <div className='modal hide-modal animate__animated animate__tada'>
          <button className='close-btn' onClick={closeModal}>
            X
          </button>
          <p className='modal-text'></p>
          <a href='/cars'>
            <button className='nav-back-btn'>Back to Collection</button>
          </a>
        </div>
        <div className='add-car-form'>
          <h1>Edit car details.</h1>
          <div className='input-container'>
            <label>Car Name: </label>
            <input type='text' name='Car_name' id='Car_name' placeholder='Car_name' onChange={(e) => onValueChange(e)} value={car.Car_name} />
          </div>
          <div className='input-container'>
            <label>Brand Name: </label>
            <input type='text' name='Brand_name' id='Brand_name' placeholder='Brand_name' onChange={(e) => onValueChange(e)} value={car.Brand_name} />
          </div>
          <div className='input-container'>
            <label>Prize: </label>
            <input
              type='number'
              min='1'
              name='Prize'
              id='Prize'
              placeholder='Total Prize'
              onChange={(e) => onValueChange(e)}
              value={car.Prize}
            />
          </div>
          <div className='input-container'>
            <label>Manufacturing Date: </label>
            <input type='date' name='manufacturing_Date' id='manufacturing_Date' onChange={(e) => onValueChange(e)} value={car.manufacturing_Date} />
          </div>
          <button className='addCar-btn' onClick={updateNewCar}>
            Edit Car
          </button>
        </div>
      </div>
    </section>
  );
};

export default EditCar;
