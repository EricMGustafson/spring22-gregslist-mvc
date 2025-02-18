export class Car {
  constructor({ id, make, model, year, color, imgUrl, price, description }) {
    this.id = id
    this.make = make
    this.model = model
    this.description = description || ''
    this.price = price
    this.year = year || ''
    this.color = color || '#000000'
    this.imgUrl = imgUrl || ''
  }

  get CarTemplate() {
    return `
    <div class="house col-md-4 p-4" id="${this.id}">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.model}-image">
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
          <i class="mdi mdi-pencil selectable" onclick="app.carsController.openEditor('${this.id}')"></i>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }


}