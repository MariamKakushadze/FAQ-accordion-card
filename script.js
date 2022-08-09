const acc = document.getElementsByClassName("question");
const answer=document.getElementsByClassName("answer");

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
}
