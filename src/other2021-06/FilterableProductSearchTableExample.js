import React from "react";

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;

    const name = product.stocked ? product.name : <span style={{ color: "red" }}>{product.name}</span>;

    return (
      <tr key={product.name}>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th key={this.props.cateogry} colSpan="2">
          {this.props.category}
        </th>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    let { products } = this.props;

    if (this.props.onlyShowProductsInStock === true) {
      products = products.filter((product) => product.stocked);
    }

    products = products.filter((product) => product.name.indexOf(this.props.searchText) >= 0);

    let rows = [];
    let lastCategory = null;

    products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} />);
      }

      rows.push(<ProductRow product={product} />);

      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.searchChanged = this.searchChanged.bind(this);
    this.onlyShowProductsInStockCheckboxClicked = this.onlyShowProductsInStockCheckboxClicked.bind(this);
  }

  searchChanged(e) {
    this.props.searchChanged(e.target.value);
  }

  onlyShowProductsInStockCheckboxClicked(e) {
    this.props.onlyShowProductsInStockCheckboxClicked(e.target.checked);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" placeholder="Search..." onChange={this.searchChanged} />
        </div>
        <div>
          <input
            type="checkbox"
            onChange={this.onlyShowProductsInStockCheckboxClicked}
            value={this.props.onlyShowProductsInStockCheckboxChecked}
          />
          <label>Only show products in stock</label>
        </div>
      </div>
    );
  }
}

class FilterableProductSearchTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
      onlyShowProductsInStockCheckboxChecked: false,
    };

    this.searchChanged = this.searchChanged.bind(this);
    this.onlyShowProductsInStockCheckboxClicked = this.onlyShowProductsInStockCheckboxClicked.bind(this);
  }

  searchChanged(value) {
    this.setState({ searchText: value });
  }

  onlyShowProductsInStockCheckboxClicked(value) {
    this.setState({
      onlyShowProductsInStockCheckboxChecked: value,
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          searchChanged={this.searchChanged}
          onlyShowProductsInStockCheckboxClicked={this.onlyShowProductsInStockCheckboxClicked}
          searchText={this.state.searchText}
          onlyShowProductsInStockCheckboxChecked={this.state.onlyShowProductsInStockCheckboxChecked}
        />
        <ProductTable
          products={this.props.products}
          onlyShowProductsInStock={this.state.onlyShowProductsInStockCheckboxChecked}
          searchText={this.state.searchText}
        />
      </div>
    );
  }
}

const products = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];

export default class FilterableProductSearchTableExample extends React.Component {
  render() {
    return <FilterableProductSearchTable products={products} />;
  }
}
