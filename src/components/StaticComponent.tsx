import star from "../images/icon-star.svg";

export default function StaticComponent() {
  return (
    <div>
      <div>
        <img src={star} alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
}
