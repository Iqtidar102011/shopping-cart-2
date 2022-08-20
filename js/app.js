const cartArray = [];

function display(cartProducts) {
    let totalPrice = 0
    const tableBody = document.getElementById("cart_products");
    tableBody
    tableBody.innerHTML = '';

    for (let i = 0; i < cartProducts.length; i++) {
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;
        const tr = document.createElement('tr');
        totalPrice = totalPrice + price;

        tr.innerHTML = `
                    <th>${i + 1}</th>
                     <td>${name}</td>
                     <td>${price}</td>
        
        `
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    
    
                    <th></th>
                     <td>total price</td >
                    <td>${totalPrice}</td>



`
    tableBody.appendChild(tr);
}




function addToCart(element) {
    // parent node and then children to access the child (h2 and p).[0] to access the 1st element(h2).innertext to get the text of h2 tag
    const productName = element.parentNode.parentNode.children[0].innerText;
    // children[1] to access p.children[0] to access span .innertex to get the text
    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const productObj = {
        productName: productName,
        productPrice: parseInt(productPrice)
    }
    // add number of products 
    cartArray.push(productObj);
    document.getElementById("total_added_product").innerText = cartArray.length;
    display(cartArray);

}