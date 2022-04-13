
export class House {
  constructor({description, bathrooms, bedrooms, id, imgUrl, price, year}) {
    
    this.bathrooms = bathrooms || ''
    this.bedrooms = bedrooms || ''
    this.description = description
    this.id = id
    this.imgUrl = imgUrl
    this.price = price
    this.year = year || ''
  }

  get HouseTemplate() {
    return `
    <div class="house col-md-4 p-4" id="${this.id}">
    <div class="bg-white shadow rounded">
      <img class="w-100 rounded-top" src="${this.imgUrl}" alt="${this.description}-image">
      <div class="p-3">
        <p class="text-center uppercase"><b>${this.description} - ${this.year}</b></p>
        <p class="m-0">Bedrooms: ${this.bedrooms}</p>
        <p class="m-0">Bathrooms: ${this.bathrooms}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
        <p class="m-0">$${this.price}</p>
        <i class="mdi mdi-pencil selectable" onclick="app.housesController.openEditor('${this.id}')"></i>
        <i class="mdi mdi-delete selectable" onclick="app.housesController.removeHouse('${this.id}')"></i>
      </div>
    </div>
  </div>`
  }
}