const modalContainer = document.querySelector(".modal-container")
const recipes = document.querySelectorAll(".one-recipe")

for (let recipe of recipes){
  recipe.addEventListener("click", function(){
    modalContainer.classList.add("active")
    const recipeId = recipe.getAttribute("id")
    const recipeToTheModal = document.getElementById(recipeId)
    const recipeToTheModalImage = recipeToTheModal.querySelector('img')
    const recipeToTheModalName = recipeToTheModal.querySelector('.one-recipe-name')
    const recipeToTheModalAuthor = recipeToTheModal.querySelector('.one-recipe-author')
    const recipeInModalImage = document.getElementById('modal-recipe-img')
    const recipeInModalName = document.getElementById('modal-recipe-name')
    const recipeInModalAuthor = document.getElementById('modal-recipe-author')
    recipeInModalImage.src = recipeToTheModalImage.src
    recipeInModalName.innerText = recipeToTheModalName.innerText
    recipeInModalAuthor.innerText = recipeToTheModalAuthor.innerText
  })
}

const closeModalButton = document.querySelector(".close-modal-button").addEventListener("click", function(){
  modalContainer.classList.remove("active")
})