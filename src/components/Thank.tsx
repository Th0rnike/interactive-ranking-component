import thankYou from "../images/illustration-thank-you.svg";
import "./thank.css";

interface RatingProp {
  rating: number;
}

export default function Thank(props: RatingProp) {
  return (
    <div className="thank_div">
      <img src={thankYou} alt="" />
      <h1 id="stat">You selected {props.rating} out of 5</h1>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
