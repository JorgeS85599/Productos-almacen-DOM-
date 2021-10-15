const divMessagesUI = document.getElementById('messages');
const tbodyTableProducts = document.getElementById('almacen').getElementsByTagName('tbody')[0]


class View{
    renderNewProduct(product) {
        const newProdTr = document.createElement('tr')
        newProdTr.innerHTML = `
            <th> ${product.id} </th>
            <th> ${product.name} </th>
            <th> ${product.units} </th>
            <th> ${product.price} </th>
            <th> ${product.productImport().toFixed(2)} €</th>
            <th></th>`
        tbodyTableProducts.appendChild(newProdTr)

    }

    renderEditProduct(product) {
        const newProdTr = document.createElement('tr')
        newProdTr.innerHTML = `
            <th> ${product.id} </th>
            <th> ${product.name} </th>
            <th> ${product.units} </th>
            <th> ${product.price} </th>
            <th> ${product.productImport().toFixed(2)} €</th>
            <th></th>`
        let elementoViejo = tbodyTableProducts.getElementsByTagName('tr')[product.id - 1]
        tbodyTableProducts.replaceChild(newProdTr,elementoViejo)
    }

    renderDelProduct(id) {
        const deleteProduct = tbodyTableProducts.getElementsByTagName('tr')[id - 1]
        tbodyTableProducts.removeChild(deleteProduct)
    }

    renderStoreImport(total) {
        document.getElementById('total').innerHTML = `${total} €`
    }

    renderErrorMessage(message) {
        const newMessageDiv = document.createElement('div')
        newMessageDiv.className = "col-sm-12 alert alert-danger alert-dismissible fade show"
        newMessageDiv.innerHTML = `
            <span><strong>ATENCIÓN: </strong>${message}</span>
            <button type="button" class="btn-close" data-bs-dismiss="alert" onclick="this.parentElement.remove()"></button>`
        
        divMessagesUI.appendChild(newMessageDiv)
    }
}

module.exports = View;
