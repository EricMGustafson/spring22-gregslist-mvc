import { ProxyState } from "../AppState.js";
import { getCarForm } from "../components/CarForm.js";
import { carsService } from "../Services/CarsService.js";
import { Pop } from "../Utils/Pop.js";

function _drawCars() {
  let carsCardsTemplate = ''

  ProxyState.cars.forEach(car => carsCardsTemplate += car.CarTemplate)

  document.getElementById('listings').innerHTML = `
    <div class="row cars">
      ${carsCardsTemplate}
    </div>
  `

  document.getElementById('listing-modal-form-slot').innerHTML = getCarForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add Car 🚗'
}

async function _getAllCars() {
  try {
    await carsService.getAllCars()
    
  } catch (error) {
    console.error('GET ALL CARS ERROR', error)
  }
}

export class CarsController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('cars', _drawCars)
    _getAllCars()
  }

  addCar() {
    // DO THIS like always
    try {
      window.event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      const formElem = window.event.target
      const formData = {
        make: formElem.make.value,
        model: formElem.model.value,
        price: formElem.price.value,
        color: formElem.color.value,
        description: formElem.description.value,
        imgUrl: formElem.imgUrl.value,
        year: formElem.year.value,
      }
      carsService.addCar(formData)

      formElem.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()

    } catch (error) {
      // show this to the user
      console.error('[ADD_CAR_FORM_ERROR]', error)
      Pop.toast(error.message, 'error')
    }
  }

  async removeCar(id){
    try {
      await carsService.removeCar(id)      
    } catch (error) {
      console.error('CAR REMOVE ERROR', error)      
    }
  }

  drawCars() {
    _drawCars()
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}