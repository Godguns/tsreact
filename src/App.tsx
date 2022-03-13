import React, { Suspense } from 'react';
import IndexRouter from 'Src/router/indexRouter';
import { Spin } from 'antd';
import './app.css';

interface IProps {
  name: string;
  age: number;
}

function App(props: IProps) {
  console.log('>>>');
  const { name, age } = props;
  return (
    <Suspense fallback={<Spin />}>
      <IndexRouter />
    </Suspense>
  );
}

export default App;
