import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [letter, setLetter] = useState(0);
  const [word, setWord] = useState(0);
  const [isLight, setIsLight] = useState(true);
  const [isBold, setIsBold] = useState(false);
  const [isItallic, setIsItallic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [fontColor, SetFontColor] = useState("#262626");

  // Functiona that convert the text into upper case

  function upperCase() {
    input
      ? setInput((input) => input.toUpperCase())
      : alert("Please enter some text first!");
  }

  // function that will conver the text into lower case letter

  function lowerCase() {
    input
      ? setInput((input) => input.toLowerCase())
      : alert("please enter some text first!");
  }

  // function that is converting the text into capatilize

  function toCapital() {
    // let arr = input.split(" ")
    // arr = arr.map((item)=>(((item.charAt(0).toUpperCase()) + item.slice(1)).toString()).replace(," "))
    // setInput(arr)
  }

  // function that is removing thewhite spaces

  function removeSpaces() {
    input
      ? setInput((input) => input.trim().replace(/ /g, ""))
      : alert("Please enter some text first ");
  }

  // function that will clear the text inside the input

  function clearText() {
    input ? setInput("") : alert("Already Empty !!");
  }

  const textArea = useRef();

  useEffect(
    function () {
      setInput("");
      textArea.current.focus();
    },
    [textArea]
  );

  // Counting the total number of letters

  useEffect(
    function () {
      let str = input.trim();
      str = str.replace(/ /g, "");
      setLetter(str.length);
    },
    [input]
  );

  // Counting the total number of words

  useEffect(
    function () {
      let arr = input.split(/ /g);
      setWord(arr.length - 1);
    },
    [input]
  );
  return (
    <>
      <div
        className={`app-container ${isLight ? "bg-primary" : "bg-dark-half"}`}
      >
        <button
          onClick={() => setIsLight((a) => !a)}
          className={`toggle-btn text-light ${
            isLight ? "bg-secondary " : "bg-dark-full "
          }}`}
        >
          {isLight ? `Dark Mode` : "Light Mode"}
        </button>
        <p className={`heading ${isLight ? " text-black" : "text-light"}`}>
          React Text Editor
        </p>

        <textarea
          name='message'
          cols='80'
          rows='15'
          className={`text-input ${
            isLight ? "text-black" : "bg-dark-full text-light"
          }`}
          style={{
            fontWeight: `${isBold ? "bold" : "lighter"}`,
            textDecoration: `${isUnderlined ? "underline" : "none"}`,
            fontStyle: `${isItallic ? "italic" : "normal"}`,
            fontSize: `${fontSize}px`,
            color:`${fontColor}`
          }}
          ref={textArea}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <div className={`analyse-box ${isLight ? "text-black" : "text-light"}`}>
          <div className='left-side'>
            <p>Total Characters: {letter}</p>
          </div>
          <div className='mid-section'>
            <div className='cols'>
              <p
                onClick={() => setIsBold((bold) => !bold)}
                className={`text-btn ${
                  isLight
                    ? isBold
                      ? "text-btn-active"
                      : "text-btn-inactive"
                    : isBold
                    ? "text-btn-dark-active"
                    : "text-btn-dark-inactive"
                }`}
              >
                B
              </p>
              <p
                onClick={() => setIsItallic((itallic) => !itallic)}
                className={`text-btn italic  ${
                  isLight
                    ? isItallic
                      ? "text-btn-active"
                      : "text-btn-inactive"
                    : isItallic
                    ? "text-btn-dark-active"
                    : "text-btn-dark-inactive"
                }`}
              >
                I
              </p>
              <p
                onClick={() => setIsUnderlined((underlined) => !underlined)}
                className={`text-btn  ${
                  isLight
                    ? isUnderlined
                      ? "text-btn-active"
                      : "text-btn-inactive"
                    : isUnderlined
                    ? "text-btn-dark-active"
                    : "text-btn-dark-inactive"
                }`}
              >
                U
              </p>
            </div>
            <div className='cols'>
              <label for='font-size' className='text-btn' id='font-btn'>
                Font Size
              </label>
              <select
                name='font-size'
                id='font-size'
                className={`${isLight ? "light-select" : "dark-select"}`}
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
              >
                <option value={6}>6</option>
                <option value={8}>8</option>
                <option value={10}>10</option>
                <option value={12}>12</option>
                <option value={14}>14</option>
                <option value={16}>16</option>
                <option value={18}>18</option>
                <option value={20}>20</option>
                <option value={22}>22</option>
                <option value={24}>24</option>
                <option value={26}>26</option>
                <option value={28}>28</option>
                <option value={30}>30</option>
                <option value={32}>32</option>
                <option value={34}>34</option>
                <option value={36}>36</option>
                <option value={38}>38</option>
                <option value={44}>44</option>
              </select>
              {/* <p className="text-btn" id="font-resizer-btn" onClick={()=>setFontSize((size)=>size +1)}>A</p>
              <p className="text-btn" id="font-resizer-btn" onClick={()=>setFontSize((size)=>size-1)}>a</p> */}
            </div>
            <div className='cols'>
              <input
                type='color'
                name='font-color'
                id='font-color'
                value={fontColor}
                onChange={(e) => SetFontColor(e.target.value)}
              />
              <p>
                Color: <b>{fontColor}</b>
              </p>
            </div>
          </div>
          <div className='right-side'>
            <p>Total Words : {word}</p>{" "}
          </div>
        </div>
        <div className='button-area'>
          <button
            className={`btn ${
              isLight ? "bg-secondary text-light" : "bg-dark-full text-light"
            }`}
            onClick={upperCase}
          >
            Upper Case
          </button>
          <button
            className={`btn ${
              isLight ? "bg-secondary text-light" : "bg-dark-full text-light"
            }`}
            onClick={lowerCase}
          >
            Lower Case
          </button>
          <button
            className={`btn ${
              isLight ? "bg-secondary text-light" : "bg-dark-full text-light"
            }`}
            onClick={removeSpaces}
          >
            Remove Spaces
          </button>
          <button
            className={`btn ${
              isLight ? "bg-secondary text-light" : "bg-dark-full text-light"
            }`}
            onClick={clearText}
          >
            clear
          </button>
        </div>
      </div>
      <footer>
        Developed by Shivam Sharma | Apprentice | Diploma | 2023 April
      </footer>
    </>
  );
}

export default App;
