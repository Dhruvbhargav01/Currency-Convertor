// import React from 'react'

// function InputBox({
//     label, // from or too
//     amount, // shows amount of currency
//     onAmountChange, // a method show amount change
//     onCurrencyChange, // a method show currency change
//     currencyOptions = [], // all currencies option stores in this array
//     selectCurrency = "usd", //we are able to select our currency and by default its value usd
//     amountDisable = false, // it shows amount disable hai ya ni
//     currencyDisable = false, //currency disable or not

//     className = "",
// }) {
//   return (
//     <div className= {`bg-white p-3 rounded-lg text-sm flex ${className}`}>
//     <div className='w-1/2'>
//         <label className='text-black/40 mb-2 inline-block'>
//             {label}
//         </label>

//         <input 
//             className='outline-none w-full bg-transparent py-1.5'
//             type='number'
//             placeholder='Amount'
//             disabled={amountDisable} //here we can check wether our amount input field is disabled or not
//             value={amount}
//             onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // 1st onAmountChange is checker i.e it is valid or not and 2nd onAmountChange we are calling this function and we cheking it by &&.
//         />
//     </div>
//     <div className='w-1/2 flex flex-wrap justify-end text-right'>
//         <p className='text-black/40 mb-2 w-full'>Currency Type</p>
//         <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
//         value={selectCurrency}
//         onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
//         disabled={currencyDisable}
//         >
//             {currencyOptions.map((currency) => {
//                 <option key={currency} value={currency}>
//                     {currency}
//                 </option>
//             })}

//         </select>
//     </div>
       
//     </div>
//   )
// }

// export default InputBox;


import React, {useId} from 'react';
import './InputBox.css';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

    const amountInputId = useId()
  return (
    <div className={`input-box-container ${className}`}>
      <div className="input-half">
        <label htmlFor={amountInputId} className="input-label">
          {label}
        </label>
        <input
          id={amountInputId}
          className="amount-input"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>

      <div className="currency-section">
        <p className="currency-label">Currency Type</p>
        <select
          className="currency-select"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
