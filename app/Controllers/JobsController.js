import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { getJobForm } from "../components/JobForm.js";


function _drawJobs() {
  let jobsCardsTemplate = ''
  ProxyState.jobs.forEach(j => jobsCardsTemplate += j.JobTemplate)
  document.getElementById('listings').innerHTML = `
  <div class="row jobs">
    ${jobsCardsTemplate}
  </div>
  `
  document.getElementById('listing-modal-form-slot').innerHTML = getJobForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add Job 💼'
}

export class JobsController {
  constructor() {
    ProxyState.on ('jobs', _drawJobs)
    _drawJobs()
    console.log('hello from the jobs controller');
  }

  addJob() {
    debugger
    try {
      event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      let formElem = event.target
      let formData = {
        company: formElem.company.value,
        experience: formElem.company.value,
        hours: formElem.hours.value,
        image: formElem.image.value,
        position: formElem.position.value,
        salary: formElem.salary.value,
        url: formElem.url.value
      }
      jobsService.addJob(formData)
      formElem.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()
      
    } catch (error) {
      console.error('ADD_JOB_FORM_ERROR', error)
      
    }
  }

  drawJobs() {
    _drawJobs()
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenave')).hide()
  }
}
