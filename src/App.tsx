import React from 'react';
import Login from 'Src/pages/login';

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps) {
  const { name, age } = props;
  return (
    <div className='app'>
      <span>{`hi! I'm ${name}, ${age} 777 old.`}</span>
      <Login />
    </div>
  );
}

export default App;
