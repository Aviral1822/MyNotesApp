let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notes);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card my-3 mx-3" style="width:18rem;">
           
        <div class="card-body">
            <h5 class="card-title" id="ct">Notes${index + 1}</h5>
            <div class="mb-3">
            <textarea class="form-control" rows="3">${element}</textarea>
            </div>
        
            <button class="btn btn-primary" id="${index}" onclick="deleteNode(id)">Delete</a>
        </div>

      </div>`
    })

    let notesElm = document.getElementById("notes");
    if (notes != '') {
        notesElm.innerHTML = html;
    }
}



    function deleteNode(index){
    
    let notes = localStorage.getItem("notes");
    
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
