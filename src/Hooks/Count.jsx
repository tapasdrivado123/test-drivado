import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = React.useState(0);

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`
  // },[])

  return (
    <>
      <div>
        <div className="mt-10 text-center">
          <h1 className="text-[#fb4156] text-lg">{count}</h1>
          <p>You clicked {count} times</p>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 text-xs text-white uppercase rounded-md bg-slate-700"
          >
            Click me
          </button>
        </div>
      </div>
    </>
  );
};

// Similar to componentDidMount and componentDidUpdate:
// useEffect(() => {
//   // Update the document title using the browser API
//   document.title = `You clicked ${count} times`;
// });

export default Count;
