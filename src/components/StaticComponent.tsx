import star from "../images/icon-star.svg";
import "./staticComponent.css";

export default function StaticComponent() {
  return (
    <div>
      <div className="image">
        <img src={star} alt="" />
      </div>
      <div className="text">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
    </div>
  );
}
