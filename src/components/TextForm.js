import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpclick = () => {
        // console.log("Uppercase was changed " + text);
        let newText = text.toUpperCase();
        props.showAlert("Converted to Upper Case!!","success")
        setText(newText)
    }
    
    const handleLoclick = () => {
        // console.log("Lowercase was changed " + text);
        let newText = text.toLowerCase();
        props.showAlert("Converted to Lower Case!!","success")
        setText(newText)
    }

    const handleClearclick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Cleared!!","success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("All Extra Spaces removed!!","success");

    }


    const handleonchange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }


    const [text, setText] = useState('');
    // text="hfwbujkfhs";   //Wrong way to change the state 
    // setText("sdfghjkh"); //Right way to change the state
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#122e59' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="my-box" className="form-label">Example Text Area</label>
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#25416c' : 'white', color: props.mode === 'dark' ? 'white' : '#122e59' }} onChange={handleonchange} id="my-box" rows="6"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick} >Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearclick} >Clear All Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick} >Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#122e59' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words , {text.length} Characters</p>
                <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to Preview"}</p>
        </div>
        </>
    )
}
