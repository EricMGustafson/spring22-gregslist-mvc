import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor({company, experience, hours, id = generateId(), image, position, salary, url}) {
    if (!company || !position || !salary || !url){
      throw new Error ('You can\'t list a job without price, company, position, salary.')
    }
    if (salary <= 0) {
      throw new Error ('Where my money')
    }
    this.company = company
    this.experience = experience || ''
    this.hours = hours || ''
    this.id = id
    this.image = image || ''
    this.position = position
    this.salary = salary
    this.url = url
  }

  get JobTemplate() {
    return `
    <div class="job col-md-4 p-4">
    <div class="bg-white shadow rounded">
      <img class="w-100 rounded-top" src="${this.image}" alt="${this.company}-image">
      <div class="p-3">
        <p class="text-center uppercase"><b>${this.company} - ${this.position} - ${this.hours}</b></p>
        <p class="m-0">Bedrooms: ${this.experience}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
        <p class="m-0">$${this.salary}</p>
        <div class="d-flex align-items-center">
          <p class="m-0">Color:</p>
        </div>
        <div>
          <button class="btn btn-success">Apply Here</button>

        <i class="mdi mdi-delete selectable" onclick="app.jobsController.removeJob('${this.id}')"></i>
      </div>
    </div>
  </div>
    `
  }
}