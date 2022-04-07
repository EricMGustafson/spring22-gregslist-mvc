import { generateId } from "../Utils/generateId.js"

export class Car {
  constructor({ id = generateId(), make, model, year, mileage, color, img, price, description }) {
    // handle out conditions first
    if (!make || !model || !price) {
      throw new Error('You can\'t list a car without a make model and price')
    }
    // handle out conditions first
    if (price <= 0) {
      throw new Error('Where my money')
    }
    this.id = id
    this.make = make
    this.model = model
    this.description = description || ''
    this.price = price
    this.year = year || ''
    this.mileage = mileage || ''
    this.color = color || ''
    this.img = img || ''
  }

  get CarTemplate() {
    return `
    <div class="house col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.img}" alt="${this.model}-image">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.make} - ${this.model} - ${this.year}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <div class="d-flex align-items-center">
            <p class="m-0">Color:</p>
            <div class="color-box border border-dark" style="background-color: ${this.color};"></div>
          </div>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }


}