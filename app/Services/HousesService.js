import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
  addHouse(formData) {
    let newHouse = new House(formData)
    ProxyState.houses = [newHouse, ...ProxyState.houses]
  }
}


export const houseService = new HousesService()