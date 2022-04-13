import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor({company, description, hours, id, jobTitle, rate}) {
    this.company = company
    this.description = description || ''
    this.hours = hours || ''
    this.id = id
    this.jobTitle = jobTitle || ''
    this.rate = rate
  }

  get JobTemplate() {
    return `
    <div class="job col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <div class="p-3">
          <p class="text-center uppercase"><b>${this.company} - ${this.hours}</b></p>
          <p class="m-0">Bedrooms: ${this.description}</p>
          <p class="m-0"> Job Title: ${this.jobTitle}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.rate}</p>
        </div>
        <div class="d-flex align-items-center">
          <p class="m-0">Color:</p>
        </div>
        <div>
          <button class="btn btn-success">Apply Here</button>
          <i class="mdi mdi-delete selectable" onclick="app.jobsController.removeJob('${this.id}')"></i>
        </div>
      </div>
    </div>`
  }
}