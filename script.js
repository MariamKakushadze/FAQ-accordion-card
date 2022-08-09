let acc = document.getElementsByClassName("question");
let answer=document.getElementsByClassName("answer");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;
    if (answer.style.display == "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
    
  });
}
/*
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", () => {
    
      for (let j = 0; j < answer.length; j++) {
          if (i == j) {
              answer[j].style.display = answer[j].style.display == "block" ? "none" : "block"; 
          } else {
              answer[j].style.display = "none";  
          }
      }
  });
}*/