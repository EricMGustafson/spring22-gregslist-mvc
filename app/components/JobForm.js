export function getJobForm() {
  return `
  <form onsubmit="app.jobsController.addJob()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="company" class="form-label">Company</label>
      <input type="text" class="form-control" name="company" id="company" aria-describedby="company"
        placeholder="company..." required>
    </div>
    <div>
      <label for="position" class="form-label">Position</label>
      <input type="text" class="form-control" name="position" id="position" aria-describedby="position"
        placeholder="position..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="hours" class="form-label">Hours</label>
      <input type="number" class="form-control" name="hours" id="hours" aria-describedby="hours"
        placeholder="hours..." min="1950" max="2022" required>
    </div>
    <div>
      <label for="salary" class="form-label">Salary</label>
      <input type="salary" class="form-control" name="salary" id="salary" aria-describedby="salary" required>
    </div>

  </div>
  <div class="mb-3">
    <div>
      <label for="url" class="form-label">Our Url</label>
      <input type="number" class="form-control" name="url" id="url" aria-describedby="url"
      placeholder="url..." min='1' required>
    </div>
    <div>
      <label for="image" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="image" id="image" aria-describedby="image"
        placeholder="Image Url..." required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="Experience" class="form-label">Experience</label>
      <textarea type="text" class="form-control" name="Experience" id="Experience"
        aria-describedby="Experience" placeholder="Experience..." min="5" max="250" required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>
  `
}