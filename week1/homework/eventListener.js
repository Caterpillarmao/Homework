// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector('ul');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const productInput = form.elements.product;
    const quantityInput = form.elements.qty;
    const li = addLi(productInput.value, quantityInput.value);
    ul.append(li);
    productInput.value = '';
    quantityInput.value = '';
})

addLi = (product, quantity) => {
    const li = document.createElement('li');
    const value = `${quantity} ${product}`;
    li.append(value);
    return li;
}
