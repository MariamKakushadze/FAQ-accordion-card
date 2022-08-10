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
  acc[0].click();
}


/*
for (let i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", () => {
      for (let j = 0; j < answer.length; j++) {
      
          if (i == j) {
              if( answer[j].style.display == "block" ){
                
                answer[j].style.display = "none";
                }
                else{
                   answer[j].style.display ="block"; 
              }
                acc[j].style.fontWeight="700";
                acc[j].style.paddingBottom="0";
            } 
            else {
              acc[j].attributeStyleMap.clear();
              answer[j].style.display = "none";  

          } 
           
      }
      
  });
} 
*/
