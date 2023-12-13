import { useState } from "react";
import "./App.css";
import StaticComponent from "./components/StaticComponent";
import Buttons from "./components/Buttons";
import Thank from "./components/Thank";

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
      <div className="buttons">
        {rating && submit ? (
          <Thank rating={rating} />
        ) : (
          <>
            <StaticComponent />
            <Buttons handleClick={handleClick} submitRating={submitRating} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
