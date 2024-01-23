let myButton = document.querySelector('.button');
let myTable = document.querySelector('.table');
let myInput = document.querySelector('.input');



let row = myTable.insertRow();

function insertItem() {
    let row = myTable.insertRow();

    let cell1 = row.insertCell();
    let cell2 = row.insertCell();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    //fonction qui transforme en capitale la première lettre de l'article inséré dans la liste
    myInput.value = capitalizeFirstLetter(myInput.value);
    cell1.innerHTML = myInput.value;

    let cross = document.createElement("span");
    cross.innerHTML = "❌";
    cross.addEventListener("click", function() {
        myTable.deleteRow(row.rowIndex);
        //row.rowIndex renvoie l'index de la ligne à supprimer
    });

    cell2.setAttribute("class", "right-cell");
    cell2.appendChild(cross);
    //ajoute un enfant (ici <span></span>) à la cellule de droite (cell2)
    
    myInput.value = ""
}

myButton.addEventListener('click', function() {
    insertItem()
})

myInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        insertItem()
    } 
})

