let button = document.getElementById("addbtn");
button.addEventListener("click", function (e) {
    let txt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(txt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    txt.value = ""
    console.log(notesobj);
    shownote();
})
function shownote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button id = ${index} onclick="deletenote(this.id)"class="btn btn-primary">Delete</button>
                </div>
              </div>
        `
    });
    let noteselm = document.getElementById("notes");
    if (notes != 0) {
        noteselm.innerHTML = html;
    }
    else if (notes == 0) {
        alert("Please enter a value");
    }
}
function deletenote(index) {
    console.log("deleted", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownote();
}