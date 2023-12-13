import "./App.css";
import star from "./images/icon-star.svg";

function App() {
  return (
    <div className="App">
      <div>
        <img src={star} alt="" />
      </div>
      <div>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="buttons">
        <div className="ranks">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
        <button>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
