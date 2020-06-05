import React, { useState, Fragment } from 'react';

function InputForm(props) {
  const [name, updateName] = useState('');
  const [age, updateAge] = useState(0);

  const setName = (e) => {
    updateName(e.target.value);
  };

  const setAge = (e) => {
    updateAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPerson(name, age);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          placeholder='Name...'
          onChange={setName}
          required
        />
        <input
          type='number'
          value={age}
          placeholder='0'
          onChange={setAge}
          required
        />
        <input type='submit' value='Add Person' />
      </form>

      <p>Hello...{name}</p>
    </Fragment>
  );
}

export default InputForm;
