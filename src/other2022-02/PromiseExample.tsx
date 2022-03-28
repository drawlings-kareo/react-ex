import React from "react";

export default function PromiseExample() {
  const [list, setList] = React.useState(["a", "b", "c", "d"]);

  async function getListData() {
    /*fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((res) => setList(res.map((user: any) => user.name)))
    );*/
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    const names = json.map((user: any) => user.name);
    setList(names);
  }
  getListData();

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
