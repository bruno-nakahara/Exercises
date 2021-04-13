const button = document.querySelector('#openModal')

button.addEventListener('click', function() {
    const modal = document.querySelector(".modal")
    modal.classList.add("active")
})

document.querySelector('body').addEventListener("keydown", function(event) {
    const key = event.key
    const modalActive = document.getElementsByClassName("active")

    if (modalActive) {
        if(key == "Escape") {
            const modal = document.querySelector(".modal")
            modal.classList.remove("active")
        }
    }  
})