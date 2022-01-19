import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";


function productsGenerator(size){
  let items = [];
  for (let i = 0; i < size; i++) {
    items.push({ id: i, name: `Item name ${i}`, price: 2100 + i });
  }
  return items;
}

const products = productsGenerator(100);

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    // sort: true
  },
  {
    dataField: "name",
    text: "Product Name",
    // sort: true
  },
  {
    dataField: "price",
    text: "Product Price"
  }
];



function App() {
  return (
    <div className="App">
      <h2>Hello World</h2>
      <BootstrapTable
        hover
        striped
        bootstrap4
        keyField="id"
        data={products}
        columns={columns}
        pagination={paginationFactory({ sizePerPage: 25 })}
      />
    </div>
  );
}

export default App;
