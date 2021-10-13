import React from 'react';

function Pay({name, setRouting}) {
  const runPay = () => setRouting(undefined)
  return (
    <div>
      {name}
      <input  
      onChange={onSearchInput} 
      value={searchValue} 
      placeholder="введите сумму..." />
      <button onClick={runPay}>Pay</button>
    </div>
  );
}

export default Pay;
