import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { houseService } from "../Services/HousesService.js";

function _drawHouses() {
  let housesCardsTemplate = ''
  ProxyState.houses.forEach(h => housesCardsTemplate += h.HouseTemplate)
  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${housesCardsTemplate}
    </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

async function _getAllHouses() {
  try {
    await houseService.getAllHouses()
  } catch (error) {
    console.error('GET HOUSES ERROR', error)
  }
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
    _getAllHouses()
  }

  async addHouse() {
    // DO THIS like always
    try {
      window.event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      let formElem = window.event.target
      let formData = {
        bathrooms: formElem.bathrooms.value,
        bedrooms: formElem.bedrooms.value,
        description: formElem.description.value,
        imgUrl: formElem.imgUrl.value,
        price: formElem.price.value,
        year: formElem.year.value,
        levels: formElem.levels.value
    }
      await houseService.addHouse(formData)
    formElem.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()

    } catch (error) {
      console.error('ADD HOUSE FORM ERROR', error)
      throw new Error('Error')
    }
  }
  async removeHouse(id){
    try {
      await houseService.removeHouse(id)
    } catch (error) {
      console.error('HOUSE REMOVE ERROR', error)
    }
  }
  drawHouses() {
    _drawHouses()
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}