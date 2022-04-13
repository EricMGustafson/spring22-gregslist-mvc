import { Job } from "../Models/Job.js"

export function getJobForm(job) {
  job = job || new Job({})
  return `
  <form onsubmit="app.jobsController.handleSubmit('${job.id}')">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="company" class="form-label">Company</label>
      <input type="text" class="form-control" name="company" id="company" aria-describedby="company"
        placeholder="company..." required value="${job.company}">
    </div>
    <div>
      <label for="jobTitle" class="form-label">jobTitle</label>
      <input type="text" class="form-control" name="jobTitle" id="jobTitle" aria-describedby="jobTitle"
        placeholder="jobTitle..." required value="${job.jobTitle}">
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="hours" class="form-label">hours</label>
      <input type="number" class="form-control" name="hours" id="hours" aria-describedby="hours"
        placeholder="hours..." min="0" max="168" value="hours" required value="${job.hours}">
    </div>
    <div>
      <label for="rate" class="form-label">rate</label>
      <input type="rate" class="form-control" name="rate" id="rate" aria-describedby="rate" required value="${job.rate}">
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="description" class="form-label">description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="description..." min="5" max="250" required>${job.description} </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">${job.id ? 'Save' : 'Create'}</button>
  </div>
</form>
  `
}