import React from 'react';
import { addCar } from '../../service/api';
import './addCar.css';
import 'animate.css';

const AddCar = () => {
  let Car_name = '';
  let Brand_name = '';
  let Prize = 0;
  let manufacturing_Date = '';

  const updateCarName = (e) => {
    Car_name = e.target.value;
  };
  const updateBrand = (e) => {
    Brand_name = e.target.value;
  };
  const updateCarprize = (e) => {
    Prize = e.target.value;
  };
  const updateManufacturingDate = (e) => {
    manufacturing_Date = e.target.value;
  };

  const addNewCar = async () => {
    const response = await addCar(Car_name, Brand_name, Prize, manufacturing_Date);
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
          <h1>Add a new car.</h1>
          <div className='input-container'>
            <label>Car Name: </label>
            <input type='text' name='Car_name' id='Car_name' placeholder='Car_name' onChange={(e) => updateCarName(e)} required />
          </div>
          <div className='input-container'>
            <label>Brand Name: </label>
            <input type='text' name='Brand_name' id='Brand_name' placeholder='Brand_name' onChange={(e) => updateBrand(e)} required />
          </div>
          <div className='input-container'>
            <label>Prize: </label>
            <input type='number' name='Prize' id='Prize' placeholder='Prize' onChange={(e) => updateCarprize(e)} required />
          </div>
          <div className='input-container'>
            <label>manufacturing Date: </label>
            <input type='date' name='manufacturing_Date' id='manufacturing_Date' onChange={(e) => updateManufacturingDate(e)} required />
          </div>
          <button className='addCar-btn' onClick={addNewCar}>
            Add Car
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddCar;
