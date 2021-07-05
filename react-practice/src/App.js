import React from "react";

const colors = ['red', 'green', 'blue', 'pink', 'yellow', 'gray', 'white', 'black', 'almond', 'brown'];

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * 10);
  return colors[randomIndex];
}

// should be replaced with some random one in your implementation

export default function Counter() {

  const [value, setValue] = React.useState(0);
  const [color, setColor] = React.useState('null');

  React.useEffect(() => {
    setColor(getRandomColor());
  }, [value]);

  const increment = () => {
    setValue(prev => prev-1);
  }

  const decrement = () => {
    setValue(prev => prev+1);
  }

  const reset = () => {
    setValue(0);
  }

  return (
    <div style={{ borderTop: `10px solid ${color}` }}>
      <div className="value">{value}</div>
      <button className="increment" onClick={increment}>
        -;
      </button>
      <button className="decrement" onClick={decrement}>
        +
      </button>
      <button className="reset" onClick={reset}>
        reset
      </button>
    </div>
  )
};