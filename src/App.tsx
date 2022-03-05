import React from 'react';

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps) {
  const { name, age } = props;
  return (
    <div className='app'>
      <span>{`hi! I'm ${name}, ${age} 80 old.`}</span>
    </div>
  );
}

export default App;
