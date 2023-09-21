"use strict";

// let dropElem = document.getElementById("drop-elem");

// let dragElems = document.querySelectorAll(".drag");


// dragElems.forEach(dragElem => {

//     dragElem.ondragstart = (e) => {
//         let id = e.target.getAttribute("id");
//         e.dataTransfer.setData("id", id);
//     }

//     dropElem.ondragover = (e) => {
//         e.preventDefault();
//     }

//     dropElem.ondrop = (e) => {

//         let id = e.dataTransfer.getData("id");

//         let elem = document.getElementById(id);

//         e.target.append(elem);
//     }

// });



// let formElem = document.getElementById("product-create");

// formElem.addEventListener("submit",function(e){
//     e.preventDefault();

//     console.log("Sdasd")
// })


{/*  */ }


let fileInput = document.querySelector(".file-input");

let tableBody = document.querySelector(".table-area .table tbody");

let table = document.querySelector(".table")

let alertFile = document.querySelector(".file-alert")

let clearBtn = document.querySelector(".btn");

let uploadIcon = document.querySelector(".icon i");

uploadIcon.addEventListener("click", function () {
    fileInput.click();
})


fileInput.addEventListener("change", function (e) {
    uploadFiles(e,tableBody,table, alertFile,clearBtn )
})



function uploadFiles(event, body, table, alert, btn){

    let files = event.dataTransfer == undefined ? event.target.files : event.dataTransfer.files;

    for (const file of files) {

        let fileReader = new FileReader();

        fileReader.onloadend = (e) => {

            let base64Img = e.currentTarget.result;

            body.innerHTML += `<tr>
              <td><img src="${base64Img}" alt=""></td>
              <td>${file.name}</td>
              <td>${file.size / 1024} kb</td>
            </tr>`

        }

        fileReader.readAsDataURL(file);

    }

    table.classList.remove("d-none")
    alert.classList.add("d-none")
    btn.classList.remove("d-none")

}

clearBtn.addEventListener("click", function () {
    tableBody.innerHTML = "";
    table.classList.add("d-none")
    this.classList.add("d-none")
    alertFile.classList.remove("d-none")
    fileInput.value = "";
})


let iconArea = document.querySelector(".icon");

iconArea.ondragover = (e) =>{
    e.preventDefault();
}


iconArea.ondrop = (e) => {
    e.preventDefault();
    
    uploadFiles(e,tableBody,table, alertFile,clearBtn )
}

// document.querySelector(".datetime-input").addEventListener("change",function(e){
//     let date  = new Date(e.target.value);
//     console.log(date)
// })














