interface ButtonProps {
  handleClick: (r: number) => void;
  submitRating: () => void;
}

export default function Buttons(props: ButtonProps) {
  return (
    <div>
      <div className="ranks">
        {[1, 2, 3, 4, 5].map((r: number) => (
          <button onClick={() => props.handleClick(r)} key={r}>
            {r}
          </button>
        ))}
      </div>
      <button onClick={props.submitRating}>Submit</button>
    </div>
  );
}
