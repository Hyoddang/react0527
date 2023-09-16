import React, { useState } from 'react'

export default function Practice01() {
  // let firstName = '';
  // let lastName = '';

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    // firstName = e.target.value;
    
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    // lastName = e.target.value;

    setLastName(e.target.value);
  }

  function handleReset() {
    // firstName = '';
    // lastName = '';

    setFirstName('');
    setLastName('');
  }


  return (
    <form onSubmit={e => e.preventDefault}>
      <input type="text" 
      value={firstName} 
      placeholder='First Name' 
      onChange={handleFirstNameChange} 
      />
      <input type="text"
      value={lastName} 
      placeholder='Last Name'
      onChange={handleLastNameChange}
      />
      <h1>Hi {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  )
}
