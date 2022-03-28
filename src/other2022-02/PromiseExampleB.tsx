import React from "react";
export default function PromiseExampleB() {
  const [data, setData] = React.useState(0);

  // new Promise((resolve, reject) => resolve(928734)).then((res: any) => setData(res));
  /*(async () => {
    setData(await new Promise((resolve, reject) => resolve(928734)));
  })();*/

  /*let promiseA = new Promise((resolve, reject) => {
    let promiseB = new Promise((resolve, reject) => resolve(123456789));
    resolve(promiseB);
  });

  (async () => {
    const res = await promiseA;
    const data: any = await res;
    setData(data);
  })();*/

  console.log("render");

  console.log("before promise");
  const promise = new Promise((resolve, reject) => {
    console.log("in promise");
    resolve(928734);
  });
  console.log("after promise");

  /*console.log("before then");
  React.useEffect(() => {
    promise.then((res: any) => {
      console.log("in then");
      setData(res);
    });
  }, []);
  console.log("after then");*/

  console.log("before async");
  React.useEffect(() => {
    (async () => {
      const res: any = await promise;
      setData(res);
      console.log("in async");
    })();
  }, []);
  console.log("after async");

  return <div>{data}</div>;
}
