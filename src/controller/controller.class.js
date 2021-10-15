const View = require('../view/view.class')
const Store = require('../model/store.class')

class Controller {
    constructor() {
        this.store = new Store(1)
        this.view = new View()
    }

    addProductToStore(formData) {
        // Cambiamos los datos en el modelo
        try {
            const product = this.store.addProduct(formData)  
            this.view.renderNewProduct(product)
        } catch (error) {
            this.view.renderErrorMessage(error)
        }
        
        // Si todo ha ido bien mostramos los datos en
        // la página y si no mostramos el error
    }

    deleteProductFromStore(prodId) {
        const findedProduct = this.store.findProduct(Number(prodId))
        if (findedProduct) {
            confirm(`Vas a eliminar el producto con id: ${findedProduct.id} y nombre: ${findedProduct.name}`)
        }

        if (findedProduct.units > 0) {
            confirm(`El producto con id: ${findedProduct.id} y nombre: ${findedProduct.name} tiene ${findedProduct.units} unidades en stock, si aceptas desaparecerán`)
        }
        try {
            let deletedProduct = this.store.delProduct(prodId)
            this.view.renderDelProduct(deletedProduct.id)
        } catch (error) {
            this.view.renderErrorMessage(error)
        }
        // No olvides pedir confirmación y, si el producto
        // tiene unidades pedir una segunda confirmación
    }

    changeProductInStore(formData) {
        try {
            const changedProduct = this.store.changeProduct(formData)
            this.view.renderEditProduct(changedProduct)
        } catch (error) {
            this.view.renderErrorMessage(error)
        }
    }

    changeProductStock(formData) {
        try {
            let prodChanged = this.store.changeProductUnits(formData)
            this.view.renderEditProduct(prodChanged)

        } catch (error) {
            this.view.renderErrorMessage(error)
        }
    }

    calculateTotalImport() {
        let total = this.store.totalImport().toFixed(2)
        this.view.renderStoreImport(total)
    }
}

module.exports = Controller
