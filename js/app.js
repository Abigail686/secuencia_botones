// console.log("algo");

// const centerText = document.querySelectorAll(".center_text");

// console.log(centerText);

// centerText.forEach(item => {
//     // console.log(item);
//     console.log("textContent-->" ,item.textContent);
//     console.log("innerHTML-->" ,item.innerHTML);
//     // item.textContent="<h6>hola</h6>";
//     item.innerHTML ="<h6>hola</h6>";
// });

// console.log(centerText);

fetch("./../json/preguntas.json")
.then(response => response.json())
.then(data => {
    // console.log(data)
    
    const centerText = document.querySelectorAll(".center_text");

    centerText.forEach(center =>{
        center.addEventListener("click", event => {
            // for(let i=0; i< data.length; i++){
            //     if (i==event.currentTarget.textContent-1){

            //         console.log(data[i]);
            //     }
            // }
           let  indexPregunta=data[event.currentTarget.innerHTML-1] ;
           
        //    console.log(indexPregunta);

           let modal = document.querySelector("#myModal");

        //    console.log(modal);
        
           modal.style.display="block";
           
           let modalBodyP = document.querySelector(".modal-body p")
           
           modalBodyP.textContent=indexPregunta;

           let close= document.querySelector("#close");
           close.onclick=function(){

           modal.style.display="none";
           }
        })
    });

   

} )

