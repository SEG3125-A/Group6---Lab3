// main.js
function openInfo(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function populateListProductChoices(slct1, slct2) {
    const s1 = document.getElementById(slct1);
    const s2 = document.getElementById(slct2);
    s2.innerHTML = "";
    const optionArray = restrictListProducts(products, s1.value);
    optionArray.forEach(productName => {
        let product = products.find(p => p.name === productName);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        var image = document.createElement('img');
        image.src = product.image;
        image.alt = productName;
        image.style.width = '100px'; 
        s2.appendChild(image);




        const label = document.createElement('label');
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));
        s2.appendChild(label);
        s2.appendChild(document.createElement("br"));
    });
}

function selectedItems() {
    const ele = document.getElementsByName("product");
    const chosenProducts = Array.from(ele).filter(e => e.checked).map(e => e.value);
    const c = document.getElementById('displayCart');
    c.innerHTML = "";

    const para = document.createElement("p");
    para.innerHTML = "You've selected: <br>" + chosenProducts.join("<br>");
    c.appendChild(para);
    c.appendChild(document.createTextNode("The total Price is " + getTotalPrice(chosenProducts).toFixed(2) + " $"   ));
}
