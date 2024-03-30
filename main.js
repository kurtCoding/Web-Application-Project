const submitButton = document.querySelector(".submit-button");

const artwrk = document.querySelector(".artwork");

const form = document.querySelector(".artForm");

const stockButtons = document.querySelectorAll(".stock-button");

stockButtons.forEach((stockButton) => {
    addStockToggle(stockButton);
})

function addStockToggle(stockButton) {
    stockButton.addEventListener("click", (e) => {
        if (stockButton.value === "In Stock") {
            stockButton.value = "Out of Stock";
        } else {
            stockButton.value = "In Stock";
        }
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const artName = e.target.artName.value;
    
    const Artist = e.target.artist.value;

    const Img = e.target.image.value;

    const style = e.target.artStyle.value;

    const price = e.target.artPrice.value;

    const div = document.createElement("div");

    div.classList.add("artwork__block");

    div.innerHTML = `<img src="${Img}" alt="birth-of-venus" class="artwork__img"/>
    <div class="artwork__info">
        <h2>${artName}</h2>
        <hr/>
        <h3>-${Artist}</h3>
        <br/>
        <span>$${price}</span>
        <br/>
        <input type="button" value="In Stock" class="stock-button"/>
        <input type="button" value="0" class="amount-button"/>
        <br/>
        <input type="button" value="Remove" class="remove-button"/>`

        artwrk.append(div);

        const button = div.querySelector(".remove-button");
        addRemove(button);  

        const stockButton = div.querySelector(".stock-button");
        addStockToggle(stockButton);
    })

const removeButton = document.querySelectorAll(".remove-button");

function addRemove(button) {
    button.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove()
    })
}

removeButton.forEach((button) => {
    addRemove(button);
})


const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", (e) => {
    e.target.form.reset();
})

