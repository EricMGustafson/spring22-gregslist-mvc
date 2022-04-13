import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
import { sandboxApi } from "./AxiosService.js";

class HousesService {

  async getAllHouses() {
    const response = await sandboxApi.get('houses')
    const houses = response.data.map(h => new House(h))
    ProxyState.houses = houses
  }
  async addHouse(formData) {
    const response = await sandboxApi.post('houses', formData)
    const newHouse = new House(response.data)
    ProxyState.houses = [...ProxyState.houses, newHouse]
  }

  async editHouse(formData) {
    const response = await sandboxApi.put('houses/', +formData.id, formData)
    const house = new House(response.data)
    
  }

  async removeHouse(id){
    const response = await sandboxApi.delete('houses/' +id)
    ProxyState.houses = ProxyState.houses.filter(h => h.id !== id)

  }
}

export const houseService = new HousesService()