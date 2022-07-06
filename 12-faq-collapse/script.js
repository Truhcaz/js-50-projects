const questions = document.querySelectorAll(".question");

questions.forEach((question, index) => {
    const btns = document.querySelectorAll(".btn")
    btns[index].addEventListener("click", function(){
        question.classList.toggle("active");
    })
})
