export function getHouseForm() {
  return `
  <form onsubmit="app.housesController.addHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="year" class="form-label">Year</label>
      <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
        placeholder="Year..." min="1950" max="2022" required>
    </div>
    <div>
      <label for="bedrooms" class="form-label">bedrooms</label>
      <input type="bedrooms" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms" required>
    </div>
    <div>
      <label for="levels" class="form-label">levels</label>
      <input type="levels" class="form-control" name="levels" id="levels" aria-describedby="levels" required>
    </div>
    <div>
      <label for="bathrooms" class="form-label">bathrooms</label>
      <input type="bathrooms" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathrooms" required>
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="imgUrl" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="imgUrl" id="imgUrl" aria-describedby="imgUrl"
        placeholder="Image Url..." required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." min="5" max="250" required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>`
}