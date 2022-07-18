import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    (async function () {
        const response = await (await fetch(`/api/message`)).json();
        const text = response.responseMessage;
        setData(text);
    })();
  });

  return <div>{data}</div>;
}

export default App;
