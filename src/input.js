import React, {useState} from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export function PhoneNumber() {
  // declare current state and state setter 

  const [phone, setPhone] = useState("");

  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
        // update state 
        setPhone(newPhone); 
    }
    // just ignore the event, when new value is invalid
  };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input value={phone} onChange={handleChange} id='phone-input' />
    </div>
  );
}

export function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 
const goBack = () =>
    setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1);
const goToNext = () => setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);


  // determine if on the first question or not 
const onFirstQuestion = questionIndex === 0;
  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button disabled = {onFirstQuestion} onClick = {goBack}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick = {goToNext}>
          Next Question
        </button>
      </div>
    </nav>
  );
}
