const express = require('express');
const router = express.Router();
const carsController = require('../../controllers/carsController');

router.route('/').get(carsController.getAllCars);

router.route('/:id').delete(carsController.deleteCar);

router.route('/addCar').post(carsController.createNewCar);

router.route('/editCar/:id').put(carsController.updateCar);
router.route('/editCar/:id').get(carsController.getCar);

module.exports = router;
