let userButton = document.querySelector('.button');
let userTable = document.querySelector('.table');
let userInput = document.querySelector('.input');
let nbrItems = 0;


function insertItem() {
    if (userInput.value != "") {
     nbrItems++
        if (nbrItems != 0) {
            document.querySelector('.empty-message').innerText = "";
            userTable.innerHTML += `<tr class="row"><td>${userInput.value}</td><td class="right-cell"><span class="cross">❌</span></td></tr>`;
            let crosses = document.querySelectorAll('.cross');
            crosses.forEach(function(cross) {
                cross.addEventListener('click', function() {
                    nbrItems--;
                    cross.closest(".row").remove()
                    crosses = document.querySelectorAll('.cross')
                    if (crosses.length == 0){
                        userTable.innerHTML = `<td class="empty-message">Votre liste des courses est vide 😋</td>`;
                        nbrItems = 0;
                    }
                });
            })
        }
        userInput.value = ""
    } 
}

userButton.addEventListener('click', function() {
    insertItem()
})

userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        insertItem()
    } 
})