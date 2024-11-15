const data = {
  cars: require('../model/car.json'),
  setCars: function (data) {
    this.cars = data;
  },
};

const fsPromises = require('fs').promises;
const path = require('path');

const getAllCars = (req, res) => {
  res.json(data.cars);
};

const getCar = (req, res) => {
  const car = data.car.find((bk) => bk.id === parseInt(req.params.id));
  if (!car) {
    return res.json({ message: `car ID ${req.params.id} not found!` });
  }

  res.json(car);
};

const createNewCar = async (req, res) => {
  const newCar = {
    id: data.cars?.length ? data.cars[data.cars.length - 1].id + 1 : 1,
    Car_name: req.body.Car_name,
    Brand_name: req.body.Brand_name,
    Prize: parseInt(req.body.Prize),
    manufacturing_Date: req.body.manufacturing_Date,
  };

  if (!newCar.Car_name || !newCar.Brand_name || !newCar.Prize || !newCar.manufacturing_Date) {
    return res.json({ message: 'Please enter all required details!' });
  }

  data.setCars([...data.cars, newCar]);
  await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'cars.json'), JSON.stringify(data.cars));
  res.status(201).json({ message: 'Car added!' });
};

const updateCar = async (req, res) => {
  const updatedCar = data.cars.find((bk) => bk.id === parseInt(req.body.id));
  console.log(req.body);

  if (!updatedCar) {
    return res.json({ message: `Car ID ${req.body.id} not found` });
  }

  if (!req.body.Car_name || !req.body.Brand_name || !req.body.Prize || !req.body.manufacturing_Date) {
    return res.json({ message: 'Please do not leave empty fields!' });
  }

  if (req.body.Car_name) updatedCar.Car_name = req.body.Car_name;
  if (req.body.Brand_name) updatedCar.Brand_name = req.body.Brand_name;
  if (req.body.Prize) updatedCar.Prize = parseInt(req.body.Prize);
  if (req.body.manufacturing_Date) updatedCar.manufacturing_Date = req.body.manufacturing_Date;

  const filteredArray = data.cars.filter((bk) => bk.id !== parseInt(req.body.id));
  const unsortedArray = [...filteredArray, updatedCar];

  data.setCars(unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0)));
  await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'cars.json'), JSON.stringify(data.cars));
  res.json({ message: 'Car updated!' });
};

const deleteCar = async (req, res) => {
  const car = data.cars.find((bk) => bk.id === parseInt(req.params.id));
  if (!car) {
    return res.json({ message: `Car ID ${req.params.id} not found` });
  }
  const filteredArray = data.cars.filter((bk) => bk.id !== parseInt(req.params.id));
  data.setCars([...filteredArray]);
  await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'cars.json'), JSON.stringify(data.cars));
  res.json({ message: 'Car deleted!' });
};

module.exports = { getAllCars, getCar, createNewCar, updateCar, deleteCar };
