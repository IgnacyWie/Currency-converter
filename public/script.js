async function getData(){
    event.preventDefault();
    
    var first = document.getElementById('firstSelect').value;
    var second = document.getElementById('secondSelect').value;
    var value = document.getElementById('MoneyValue').value;
    var price;

    console.log()

    await fetch(`http://127.0.0.1:3030/api/currency/${first}&${second}`)
      .then(response => response.json())
	.then(data => {
	    pricen = data.price*value
	    price = pricen.toFixed(2)
	}).catch(error => {
	    alert('You inserted wrong symbols!')
	});
    
    //Clearing form
    document.getElementById('output').innerHTML = price;
}
