const participantList = document.getElementById("list");

var contenido = document.getElementById("txtProduct");
let shoppingList = [ ];


function addToList() {   
    let pos = shoppingList.length;
   if(contenido.value != "")
    {
        shoppingList.push(contenido.value);
        participantList.innerHTML = participantList.innerHTML + "<li>" + shoppingList[pos] + "</li>"
    }
    document.getElementById("txtProduct").value = "";   
}

function clearList() {
  shoppingList.length = 0;
  if(shoppingList.length == 0)
  {
    participantList.innerHTML = "";
  }   
 }
