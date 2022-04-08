import { generateId } from "../Utils/generateId.js";

export class House {
  constructor({address, bathrooms, bedrooms, color, id = generateId(), image, price, sqft, year}) {
    
    if (!price || !image || !address || !sqft) {
      throw new Error ('You can\'t list a house without a price, image, address, or sq. footage.')
    }
    if (price <= 0) {
      throw new Error ('Where my money')
    }
    this.address = address
    this.bathrooms = bathrooms || ''
    this.color = color || ''
    this.bedrooms = bedrooms || ''
    this.id = id
    this.image = image
    this.price = price
    this.sqft = sqft
    this.year = year || ''
  }

  get HouseTemplate() {
    return `
    <div class="house col-md-4 p-4">
    <div class="bg-white shadow rounded">
      <img class="w-100 rounded-top" src="${this.image}" alt="${this.address}-image">
      <div class="p-3">
        <p class="text-center uppercase"><b>${this.address} - ${this.sqft}sqft - ${this.year}</b></p>
      </div>
      <div class="d-flex justify-content-between p-3">
        <p class="m-0">Bedrooms: ${this.bedrooms}</p>
        <p class="m-0">Bathrooms: ${this.bathrooms}</p>
      </div>
      <div class="p-3 d-flex justify-content-between">
        <p class="m-0">$${this.price}</p>
        <div class="d-flex align-items-center">
          <p class="m-0">Color:</p>
          <div class="color-box border border-dark m-1" style="background-color: ${this.color};"></div>
        </div>
      </div>
    </div>
  </div>`
  }
}