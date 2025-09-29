console.log("Hello");

let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left")

for(let list of lists)
{
    list.addEventListener("dragstart", function(e){

        let selected = e.target;

        rightBox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e){
        rightBox.appendChild(selected);
        selected = null;
    })
    })
}   


// let lists = document.getElementsByClassName("lists");
// let rightBox = document.getElementById("right");
// let leftBox = document.getElementById("left");
// let draggedItem = null;

// for (let list of lists) {
//     list.addEventListener("dragstart", (e) => {
//         draggedItem = e.target;
//     });
// }

// [leftBox, rightBox].forEach(box => {
//     box.addEventListener("dragover", (e) => e.preventDefault());
//     box.addEventListener("drop", (e) => {
//         if(draggedItem){
//             box.appendChild(draggedItem);
//             draggedItem = null;
//         }
//     });
// });
