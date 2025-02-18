import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { getJobForm } from "../components/JobForm.js";
import { Pop } from "../Utils/Pop.js";

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

async function _getAllJobs() {
  try {
    await jobsService.getAllJobs()
  } catch (error) {
    console.error('GET JOBS ERROR', error)
  }
}

export class JobsController {
 
  constructor() {
    ProxyState.on ('jobs', _drawJobs)
    _getAllJobs()
  }

  async handleSubmit(id) {
    
    try {
      window.event.preventDefault()
      /**@type {HTMLFormElement} */
      // @ts-ignore
      let formElem = window.event.target
      let formData = {
        company: formElem.company.value,
        description: formElem.description.value,
        hours: formElem.hours.value,
        jobTitle: formElem.jobTitle.value,
        rate: formElem.rate.value,


      }
      if (id == 'undefined'){
        await jobsService.addJob(formData)
      } else {
        formData.id = id
        await jobsService.editJob(formData)
      }
      formElem.reset()
      // @ts-ignore
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()
      
    } catch (error) {
      console.error('ADD_JOB_FORM_ERROR', error)
      

    }
  }

  openEditor(id) {
    let job = ProxyState.jobs.find(j => j.id == id)
    if (!job) {
      Pop.toast('Invalid ID', 'error')
    }
    document.getElementById('listing-modal-form-slot').innerHTML = getJobForm(job)
    // @ts-ignore
    bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).show()
  }

  async removeJob(id) {
    try {
      await jobsService.removeJob(id)
    } catch (error) {
      console.error('JOB REMOVE ERROR', error)
    }
  }

  drawJobs() {
    _drawJobs()
    // @ts-ignore
    bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}