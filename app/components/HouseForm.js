export function getHouseForm() {
  return `
  <form onsubmit="app.housesController.addHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" name="address" id="address" aria-describedby="address"
        placeholder="address..." required>
    </div>
    <div>
      <label for="sqft" class="form-label">SqFt</label>
      <input type="text" class="form-control" name="sqft" id="sqft" aria-describedby="sqft"
        placeholder="sqft..." required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="year" class="form-label">Year</label>
      <input type="number" class="form-control" name="year" id="year" aria-describedby="year"
        placeholder="Year..." min="1900" max="2023" required>
    </div>
    <div>
      <label for="color" class="form-label">Color</label>
      <input type="color" class="form-control" name="color" id="color" aria-describedby="color" required>
    </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
  <div>
      <label for="bedrooms" class="form-label">Bedrooms</label>
      <input type="bedrooms" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms" required>
    </div>
    <div>
      <label for="bathrooms" class="form-label">Bathrooms</label>
      <input type="bathrooms" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathrooms" required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="image" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="image" id="image" aria-describedby="image"
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