const submitButton = document.querySelector(".submit-button");

const form = document.querySelector(".artForm");

const artwrk = document.querySelector(".artwork");

submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    const artName = document.getElementById("art-name").value;
    
    const Artist = document.getElementById("artist").value;

    const Img = document.getElementById("art-image").value;

    const style = document.getElementById("art-style").value;

    const price = document.getElementById("art-price").value;

    const div = document.createElement("div")

    div.classList.add("artwork__block");

    div.innerHTML = `<img src="${Img}" alt="birth-of-venus" class="artwork__img"/>
    <div class="artwork__info">
        <h2>${artName}</h2>
        <hr/>
        <h3>-${Artist}</h3>
        <br/>
        <span>${price}</span>
        <br/>
        <input type="button" value="In Stock" class="stock-button"/>
        <input type="button" value="0" class="amount-button"/>
        <br/>
        <input type="button" value="Remove" class="remove-button"/>`

        artwrk.append(div);

        const removeButton = document.querySelectorAll(".remove-button");

removeButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove()
    })
})
})

const removeButton = document.querySelectorAll(".remove-button");

removeButton.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.target.parentNode.parentNode.remove()
    })
})


const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", (e) => {
    e.target.form.reset();
})