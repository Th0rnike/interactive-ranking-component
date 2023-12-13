import { useState } from "react";
import "./App.css";
import star from "./images/icon-star.svg";
import thankYou from "./images/illustration-thank-you.svg";

function App() {
  const [rating, setRating] = useState<number>();
  const [submit, setSubmit] = useState<boolean>(false);

  const handleClick = (r: number) => {
    setRating(r);
  };

  const submitRating = () => {
    setSubmit(!submit);
  };

  return (
    <div className="App">
      <div></div>
      <div className="buttons">
        {rating && submit ? (
          <>
            <img src={thankYou} alt="" />
            <h1>You selected {rating} of 5</h1>
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </>
        ) : (
          <>
            <div>
              <img src={star} alt="" />
            </div>
            <h1>How did we do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <div className="ranks">
              {[1, 2, 3, 4, 5].map((r: number) => (
                <button onClick={() => handleClick(r)} key={r}>
                  {r}
                </button>
              ))}
            </div>
            <button onClick={submitRating}>Submit</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
