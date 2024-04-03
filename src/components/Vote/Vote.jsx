import { useState } from "react";

const Vote = () => {
  const data = ["apple", "grape", "orange"];
  const [state, setState] = useState({ apple: 0, grape: 0, orange: 0 });

  const handleVote = (value) => {
    console.log(value);
    // if (value === "apple") {
    //   setState((prev) => ({ ...prev, apple: prev.apple + 1 }));
    // }
    // if (value === "grape") {
    //   setState((prev) => ({ ...prev, grape: prev.grape + 1 }));
    // }
    // if (value === "orange") {
    //   setState((prev) => ({ ...prev, orange: prev.orange + 1 }));
    // }

    //   setState((prev) => ({ ...prev, [value]: prev[value] + 1 }));

    switch (value) {
      case "apple":
        setState((prev) => ({ ...prev, apple: prev.apple + 1 }));
        break;
      case "grape":
        setState((prev) => ({ ...prev, grape: prev.grape + 1 }));
        break;
      case "orange":
        setState((prev) => ({ ...prev, orange: prev.orange + 1 }));
        break;
      default:
        break;
    }
  };

  //also can be use switch

  const totalVotes = state.apple + state.grape + state.orange;

  return (
    <div>
      <div>
        {data.map((btn) => (
          <button onClick={() => handleVote(btn)} key={btn}>
            {btn}
          </button>
        ))}
      </div>
      <div>
        <h2>apple: {state.apple}</h2>
        <h2>grape: {state.grape}</h2>
        <h2>orange: {state.orange}</h2>
        <h2>Total votes: {totalVotes}</h2>
      </div>
    </div>
  );
};

export default Vote;
