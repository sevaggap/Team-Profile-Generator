function generateCards (data,role) {
  return `<div class="card ml-5 mb-5" style="width: 18rem;">
  <h1 class="card-img-top bg-primary text-light">${data.name} <br> ${role}</h1> 
  <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${data.id}</li>
      <li class="list-group-item">Email: ${data.email}</li>
      <li class="list-group-item">GitHub: ${data.github}</li>
    </ul>
  </div>`
  }
  
  module.exports = generateCards;
  