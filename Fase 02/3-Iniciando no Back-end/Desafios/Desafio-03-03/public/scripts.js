const modalOverlay = document.querySelector(".modal-overlay")
const courses = document.querySelectorAll(".course")
const modal = document.querySelector(".modal")

for(let course of courses){
  course.addEventListener("click",function(){
    const courseId = course.getAttribute("id")
    modalOverlay.classList.add("active-minimize")
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`
  
  })
}

document.querySelector(".maximize-modal").addEventListener("click", function(){
  
  if(!(modal.classList.contains == "maximize")){
    modal.classList.add("maximize")
  }

  
  

})

document.querySelector(".close-modal").addEventListener("click", function(){
  modalOverlay.classList.remove("active-minimize")
  modal.classList.remove("maximize")
})