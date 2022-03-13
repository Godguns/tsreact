import React from 'react';
import IndexRouter from 'Src/router/indexRouter';

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps) {
  console.log('>>>');
  const { name, age } = props;
  return (
    <div className='app'>
      <IndexRouter />
    </div>
  );
}

export default App;
