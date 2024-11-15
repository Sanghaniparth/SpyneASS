import axios from 'axios';

const URL = 'http://localhost:8082';

export const getCars = async () => {
  try {
    return await axios.get(`${URL}/cars`);
  } catch (error) {
    console.log('Error while calling get cars API', error);
  }
};

export const getCar = async (id) => {
  try {
    return await axios.get(`${URL}/cars/editCar/${id}`);
  } catch (error) {
    console.log('Error while calling get car API', error);
  }
};

export const editCar = async (carDetails) => {
  try {
    return await axios.put(`${URL}/cars/editCar/${carDetails.id}`, carDetails);
  } catch (error) {
    console.log('Error while calling edit car API', error);
  }
};

export const addCar = async (Car_name, Brand_name, Prize, manufacturing_Date) => {
  try {
    const carDetails = {
      Car_name: Car_name,
      Brand_name: Brand_name,
      Prize: Prize,
      manufacturing_Date: manufacturing_Date,
    };

    return await axios.post(`${URL}/cars/addCar`, carDetails);
  } catch (error) {
    console.log('Error while calling add car API', error);
  }
};

export const deleteCar = async (id) => {
  try {
    return await axios.delete(`${URL}/cars/${id}`);
  } catch (error) {
    console.log('Error while calling delete car API', error);
  }
};
