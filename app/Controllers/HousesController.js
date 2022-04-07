import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { houseService } from "../Services/HousesService.js";

function _drawHouses() {
  let housesCardsTemplate = ''
  ProxyState.houses.forEach(h => housesCardsTemplate = h.HouseTemplate)
  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${housesCardsTemplate}
    </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
    console.log('hello from house controller');
  }

  addHouse() {
    // DO THIS like always
    try {
      event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      let formElem = event.target
      let formData = {
      address: formElem.address.value,
      squareFoot: formElem.squareFoot.value,
      year: formElem.year.value,
      bedrooms: formElem.bedrooms.value,
      bathrooms: formElem.bathrooms.value,
      color: formElem.color.value,
      price: formElem.price.value,
      image: formElem.image.value,
      description: formElem.description.value 
    }
    houseService.addHouse(formData)
    formElem.reset()
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()

    } catch (error) {
      console.error('ADD HOUSE FORM ERROR', error)
      throw new Error('Error')
    }
  }
  drawHouses() {
    _drawHouses()
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}