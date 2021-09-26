// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const removeBodyclasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
  }

  const togglemode = (cls) => {
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.background = '#122e59';
      showAlert("Dark mode has been Enabled", "success")
      // document.title='TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title='Install TextUtils';
      // }, 1500);
      // setInterval(() => {
      //   document.title='Amazing App';
      // }, 1000);
    }
    else {
      setmode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been Enabled", "success")
      // document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar /> */}
      {/* <TextForm /> */}
      <Router>
        <Navbar title="TextUtils" aboutTexts="About" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to Analyse " mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
