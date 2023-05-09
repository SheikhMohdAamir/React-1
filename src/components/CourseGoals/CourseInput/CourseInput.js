import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [empty, notEmpty] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
      notEmpty(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length===0){
      notEmpty(false)
      return;
    }
    props.onAddGoal(enteredValue);

  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color:empty===false? 'red' : 'black'}}>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler}  style={{borderColor:empty===false? 'red' : '#ccc', backgroundColor:empty===false? 'salmon' : 'transparent'}}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;