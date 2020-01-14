function StudentPicker() {
    let names = document.getElementById("names").value;
    names = names.split(",");
    toInteg = parseInt(Math.random() * names.length);
    // let i = document.createElement("p");
    // i.innerHTML = names[toInteg];
    let r = document.getElementById("RandomName")
    r.innerHTML = names[toInteg]
    // document.body.appendChild(r);
}
  
function clearfield() {
    location.reload();
}  