import StarLogo from "./StarLogo";
import Title from "./Title"
import MainText from "./MainText";
import { useState } from "react";


function App() {

  //somehow make on submit add class to inherit and thank-you-container
  const [clickedRating, setClickedRating] = useState(null);
  const [hideFirst, setHideFirst] = useState(false);
  const [hideSecond, setHideSecond] = useState(true);

  const handleButtonClick = (value) => {
    setClickedRating(value);
  };

  const handleBtnClick = () => {
    setHideFirst(true);
    setHideSecond(false);
  };


  return (
    <div className="app">
      <section className="container">
        <div className={hideFirst ? 'hidden' : 'inherit'}>
          <StarLogo />
          <Title />
          <MainText />
          <div className="ratings">
            <button className="rating-btn" onClick={() => handleButtonClick(1)}>1</button>
            <button className="rating-btn" onClick={() => handleButtonClick(2)}>2</button>
            <button className="rating-btn" onClick={() => handleButtonClick(3)}>3</button>
            <button className="rating-btn" onClick={() => handleButtonClick(4)}>4</button>
            <button className="rating-btn" onClick={() => handleButtonClick(5)}>5</button>
          </div>
          <button onClick={handleBtnClick} className="submit">
            <strong>SUBMIT</strong>
          </button>
        </div>
        <div className={hideSecond ? 'hidden' : 'thank-you-container'}>
          <img src="../images/illustration-thank-you.png" alt="" />
          {clickedRating && <div className="selected-rating">
            You selected {clickedRating} out of 5
          </div>}
          <h2>Thank You!</h2>
          <p class="msg">
            We appreciate you taking the time to give a rating. If you ever need more support,
            don't hesitate to get in touch!
          </p>
        </div>
      </section>
    </div>
  )
}

export default App;
