import React, {useState} from 'react';
import PropTypes from 'prop-types';

const TestForm = (props) => {
    const [text, setText] = useState('');

    const handleUpperCase = () =>{
        const newText = text.toUpperCase();
        console.log('Change to Uppercase'+ newText);
        setText(newText);
    }
    const handleLowerCase = () =>{
        const newText = text.toLowerCase();
        console.log('Change to Uppercase'+ newText);
        setText(newText);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
        console.log('OnChnage')
    }
  return (
    <div>
        <br/><br/>
        <h2>{props.heading}</h2>
        <textarea id="txtfrm" name="txtfrm" value={text} onChange={handleOnChange} placeholder="Enter Text Here" rows="18" cols="80"></textarea>
        <br/>
        <button onClick={handleUpperCase}>Convert to Uppercase</button>
        <button onClick={handleLowerCase}>Convert to Lowercase</button>
        <p>{text.split(' ').length} words, {text.length} characters</p>
    </div>
  )
}

TestForm.propTypes = {
    heading: PropTypes.string
}
TestForm.defaultProps = {
    heading: 'Text To Analyze'
}

export default TestForm;

