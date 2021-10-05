// import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// import Button, { ButtonProps } from "./Button";

/*import ButtonImplementor from "./ButtonImplementor";

ReactDOM.render(<ButtonImplementor />, document.getElementById("root"));*/

/*function Example() {
  const [x, y] = useState(4);
  const [fruit, setFruit] = useState("banana");
  const [num, setNum] = useState(null);
  const [arr, setArr] = useState([]);
  // const [arr, setArr] = useState();

  useEffect(() => {
    document.title = `You've clicked ${x} times`;
  });

  useEffect(() => {
    console.log("yo");
  });

  useEffect(() => {
    setNum(8);
    setArr([1, 2, 3]);
  });

  return (
    <>
      <div>
        <p>You've clicked {x} times</p>
        <div>
          <button onClick={() => y(x + 1)}>Click me</button>
        </div>
      </div>
      <div>
        <input type="text" onChange={(e) => setFruit(e.target.value)} />
        {fruit}
      </div>
      <div>{num}</div>
      {arr.map((a) => (
        <span>{a}</span>
      ))}
    </>
  );
}

ReactDOM.render(<Example />, document.getElementById("root"));*/

// import DefaultWhatWhatYo from "./MyChip/MyExport";
// import MyChipStory from "./MyChip/MyChipStory";

// import Chip from "./MyChip";
// import MyChipStory from "./MyChip/Story";

// ReactDOM.render(<MyChipStory />, document.getElementById("root"));

// import B from "./B";
/*import C from "./C";

const props = { x: 1, y: "y", f: () => console.log("here") };

ReactDOM.render(<C {...props} />, document.getElementById("root"));*/
// ReactDOM.render(<B />, document.getElementById("root"));

// import FilterableProductSearchTableExample from "./FilterableProductSearchTableExample";
// ReactDOM.render(<FilterableProductSearchTableExample />, document.getElementById("root"));

// import "./index.css";
/*const Com = (props) => {
  return <div>{props.x}</div>;
};*/

/*class Com extends React.Component {
  render() {
    return <div style={{ color: "green" }}>{this.props.x}</div>;
  }
}

ReactDOM.render(<Com x={"abce"} />, document.getElementById("root"));*/

// import PropTypes from "prop-types";

/*class ProductRow extends React.Component {
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
          <input
            type="text"
            placeholder="Search..."
            onChange={this.searchChanged}
          />
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

ReactDOM.render(<FilterableProductSearchTable products={products} />, document.getElementById("root"));
*/

// import m, {C} from './another.js';
// import {y} from './another.js';
// ReactDOM.render(new A.C(17).f(), document.getElementById('root'));
// ReactDOM.render(y, document.getElementById('root'));

// import Link from '@material-ui/core/Link';

/*function Link(props) {
  return <a href="http://reactjs.org">link</a>
}

ReactDOM.render(<Link></Link>, document.getElementById('root'))*/

/*ReactDOM.render(
  <Link
    href="https://reactjs.org/"
    onClick={() => {console.info("I'm a button")}}
    rel="noreferrer"
  >
      link
  </Link>,
  document.getElementById('root'));*/

/*class C extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.x} {this.props.y}</div>
  }
}

C.propTypes = {
  x: PropTypes.number,
  y: PropTypes.string.isRequired,

}

ReactDOM.render(<C x={1}/>, document.getElementById('root'));*/

/*import f from './test.ts';

ReactDOM.render(<div>{f()}</div>, document.getElementById('root'));*/

/*function SpecificHello(props) {
  return (<Hello>specific, hello</Hello>);
}

function Hello(props) {
  return (<div>{props.children}</div>);
}

ReactDOM.render(<SpecificHello/>, document.getElementById('root'));*/

/*const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

ReactDOM.render(<Calculator/>, document.getElementById('root'));*/

/*class MyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: 'default'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

const x = <div>Hello World</div>

ReactDOM.render(x, document.getElementById('root'));*/

/*class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    console.log('name is now: ' + this.state.value);
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

ReactDOM.render(<MyForm/>, document.getElementById('root'));*/

// ReactDOM.render(<input value="hi" />, document.getElementById('root'));

/*setTimeout(function() {
  ReactDOM.render(<input value={null} />, document.getElementById('root'));
}, 1000);*/

/*const list = props.list;
  const items = list.map((item, index) =>
    <li key={index}>{item}</li>
  );*/

/*
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
  <Blog posts={posts} />,
  document.getElementById('root')
);
*/

/*function List(props) {
  
  return (
    <ul>{props.list.map((item, index) => <li key={index}>{item}</li>)}</ul>
  );
}

ReactDOM.render(<List list={[1,2,3,4,5,6,7,8,9,10,11,12]}/>, document.getElementById('root'));*/

/*function Hello(props) {
  return (
    <div>{props.text}</div>
  )
}

ReactDOM.render(<Hello text={'yos'}/>, document.getElementById('root'));
ReactDOM.render(<Hello text="yes"/>, document.getElementById('root'));*/

/*function Hello(props) {
  return (<div>{props.x}</div>)
}

const arg = "hello!";
ReactDOM.render(<Hello x={arg}/>, document.getElementById('root'));*/

/*
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);*/

/*function Hello() {
  return (
    <ul>
      {listItems} 
    </ul>
    );
}*/

/*function List(props) {
  const numbers = props.numbers;
  console.log(numbers);

  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );

  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<List list={numbers}/>, document.getElementById('root'));*/

/*function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);*/

// import './index.css';
// import Practice from './Practice';
// import {HelloWorld, v} from './HelloWorld';
// import App from './App';

/*function Hello() {
  function handleClick(e) {
    e.preventDefault();
    console.log("f():" + e);
  }
  return <h1 onClick={handleClick}>Hello</h1>
}

function Hello() {
  return <div>Hello World</div>
}

class Hello extends React.Component {
  render() {
    return <div>Hello World</div>
  }
}

class Hello extends React.Component {
  constructor() {
    super();
  }

  f() {
    console.log("f()");
  }

  render() {
    return <button onClick={this.f}>Hello World</button>
  }
}*/

/*function Hello() {
  return <button onClick={clicked}>hello</button>;
}*/

/*class Hello extends React.Component {
  constructor() {
    super();
    this.state = {x: 1};

    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    this.setState(prevState => { return {x: prevState.x + 1}});
    console.log(this.state.x);
  }

  render() {
    return <button onClick={this.clicked}>hello {this.state.x}</button>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));*/

// import Practice from './other/Practice';
// ReactDOM.render(<Practice x="param"/>, document.getElementById('root'));

// ReactDOM.render(<HelloWorld x={v}/>, document.getElementById('root'));

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

/*function f(x) {
  return "input is " + x;
}

const element = 
  (<div>
    <div>{f(3)}</div>
  </div>);

const element2 = React.createElement('div',null,'Hello World')

const element3 = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};*/

/*function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
