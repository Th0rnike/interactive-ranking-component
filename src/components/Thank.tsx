import thankYou from "../images/illustration-thank-you.svg";

interface RatingProp {
  rating: number;
}

export default function Thank(props: RatingProp) {
  return (
    <div>
      <img src={thankYou} alt="" />
      <h1>You selected {props.rating} of 5</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
