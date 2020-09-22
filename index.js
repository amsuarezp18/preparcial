document.addEventListener('readystatechange', event =>{
    if(event.target.readyState == 'complete'){
        generateTable();
    }
});

function generateTable(){
    fetch('./data.json')
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        var tbody = document.getElementsByTagName("tbody")[0];
        for( var i in data){
            
            var row = document.createElement("tr");
            
            var firstColumn = document.createElement("td");
            var textInPosition = document.createTextNode(data[i].last_lane);
            firstColumn.appendChild(textInPosition);
            row.appendChild(firstColumn);

            var secondColumn = document.createElement("td");
            var textInSecond = document.createTextNode(data[i].first_name);
            secondColumn.appendChild(textInSecond);
            row.appendChild(secondColumn);

            var thirdColumn = document.createElement("td");
            var textInThird = document.createTextNode(data[i].email);
            thirdColumn.appendChild(textInThird);
            row.appendChild(thirdColumn); 

            var fourthColumn = document.createElement("td");
            var x = document.createElement("IMG");
            x.setAttribute("src", data[i].photo);
            x.setAttribute("width", "200");
            x.setAttribute("height", "200");
            x.setAttribute("alt", "The Pulpit Rock");
            fourthColumn.appendChild(x);
            row.appendChild(fourthColumn); 

            var fifthColumn = document.createElement("td");
            var btn1 = document.createElement("BUTTON");
            btn1.innerHTML = "Eliminar";
            fifthColumn.append(btn1)
            row.appendChild(fifthColumn);

            var fixColumn = document.createElement("td");
            var btn2 = document.createElement("BUTTON");
            btn2.innerHTML = "Actualizar";
            fixColumn.appendChild(btn2)
            row.appendChild(fixColumn);

            tbody.appendChild(row);

        }
    })
}

appendData = () => {
    console.log("ygutghujklhugyh")
}
organiceByLastName = () => {
    console.log("holaaa name")
}

organiceByName = () => {
    console.log("holaaa name")
}

organiceByEmail = () => {
    console.log("holaaa name")
}

organiceByPhoto = () => {
    console.log("holaaa name")
}