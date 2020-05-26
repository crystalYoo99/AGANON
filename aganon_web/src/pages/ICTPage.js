import React from "react";

function ICTpage() {
  const [fetch, setFetch] = React.useState(false);

  function handleFetch() {
    setfetch(t => !t);
  }
  return (
    <div>
      <div>ICT</div>
      <div>this is ICT page.</div>
    </div>
  );
}

export default ICTpage;
