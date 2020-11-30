import React, {Component} from 'react';
import './App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

let Product_List = {
    '1': {id: 1, category: 'Movies', price: '$4.99', name: 'Avengers End Game'},
    '2': {id: 2, category: 'Movies', price: '$15.99', name: 'Civil War'},
    '3': {id: 3, category: 'Music', price: '$99.99', name: 'Top 100 charts 2019'},
    '4': {id: 4, category: 'Electronics', price: '$799.99', name: 'Apple Iphone 12'},
    '5': {id: 5, category: 'Electronics', price: '$119.99', name: 'Apple Airpods Pro'},
    '6': {id: 6, category: 'Furniture', price: '$399.99', name: 'Queen Matress'}
};

class Product extends Component {

    constructor(props) {
      super(props);
      this.state = {
          products : Product_List,
          filterText : ''
        }
    }

    handleFilter = (filterInput) => {
      this.setState(filterInput);
    }

    handleSave = (product) => {
      if (!product.id) {
           product.id = new Date().getTime()
      }
      this.setState((prevState) => {
        let products = prevState.products
        products[product.id] = product
        return { products }
      });

    }
    handleDestroy = (productId) => {
      this.setState((prevState) => {
        let products = prevState.products
        delete products[productId]
        return { products }
      });
  }

    render() {
      return (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <h1>My Inventory</h1>
              <Filter 
                  onFilter={this.handleFilter}/>
  
              <ProductTable 
                  products={this.state.products} 
                  filterText={this.state.filterText}
                  onDestroy={this.handleDestroy}/>
  
              <ProductForm
                  onSave={this.handleSave}/>
              </div>
          </div>
        </div>
      )
    }
  }
  
  export default Product;