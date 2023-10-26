const item = document.getElementById("item"); 
const ArticuloInput = document.getElementById("Articulo");
const ValorInput = document.getElementById("Valor");
const totalText = document.getElementById("total");
let total = 0;

function calcularTotal() {
    const name = ArticuloInput.value;
    const price = parseFloat(ValorInput.value);

    if (name && !isNaN(price)) {
        const itemElement = document.createElement("li");
        itemElement.className = "item";
        itemElement.innerHTML = `<span>${name}</span><span>$${price.toFixed(2)}</span>`;
        item.appendChild(itemElement); 

        total += price;
        totalText.textContent = `Total: $${total.toFixed(2)}`;

        ArticuloInput.value = "";
        ValorInput.value = "";
    }
} 

    



