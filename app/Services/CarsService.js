import { ProxyState } from "../AppState.js"
import { Car } from "../Models/Car.js"
import { sandboxApi } from "./AxiosService.js";

class CarsService {
  
  async getAllCars(){
    // @ts-ignore
    const response = await sandboxApi.get('cars')
    const cars = response.data.map(c => new Car(c))
    ProxyState.cars = cars
  }

  async addCar(formData) {
    const response = await sandboxApi.post('cars', formData)
    const newCar = new Car(response.data)
    ProxyState.cars = [...ProxyState.cars, newCar]
  }

  async editCar(formData){
    const response = await sandboxApi.put('cars/' +formData.id, formData)
    const car = new Car(response.data)
    const index = ProxyState.cars.findIndex(c => c.id == car.id)
    ProxyState.cars.splice(index, 1, car)
    ProxyState.cars = ProxyState.cars
  }
  
  async removeCar(id) {
    const response = await sandboxApi.delete('cars/' +id)
    ProxyState.cars = ProxyState.cars.filter(c => c.id !== id)
  }
}

export const carsService = new CarsService()