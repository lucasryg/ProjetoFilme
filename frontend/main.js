function button() {

    fetch('http://localhost:5000/api/Filmes')
        .then(res => res.json())
        .then(data => {
            var table = document.getElementById('myTable')

            for (var i = 0; i < data.length; i++) {
                var row = `<tr>
            <td>${data[i].titulo}</td>
            <td>${data[i].idGeneroNavigation.nome}</td>
            
            </tr>`

                table.innerHTML += row;
            }})
                        
};

