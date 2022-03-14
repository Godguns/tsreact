import React, { Suspense, Component } from 'react';
import { registerMicroApps, start } from 'qiankun';
import IndexRouter from 'Src/router/indexRouter';
import { Spin } from 'antd';
import './app.css';
import { Link, Router } from 'react-router-dom';

interface IProps {
  name: string;
  age: number;
}

// function App(props: IProps) {
//   console.log('>>>');
//   const { name, age } = props;
//   return (
//     <div>
//       <IndexRouter />
//       <div id='subapp-viewport' />
//     </div>
//     // <Suspense fallback={<Spin />}>
//     //   <IndexRouter />
//     //   <div id='subapp-viewport' />
//     // </Suspense>
//   );
// }

class app extends Component<any, any> {
  componentDidMount() {
    registerMicroApps(
      [
        {
          name: 'reactapp', // app name registered
          entry: '//localhost:9001',
          container: '#sub',
          activeRule: '/reactMicroApp',
        },
      ],
      {
        beforeLoad: [
          (ap1): any => {
            console.log(ap1);
            console.log('[LifeCycle] before load %c%s', 'color: green;', ap1.name);
          },
        ],
        beforeMount: [
          (ap2): any => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', ap2.name);
          },
        ],
        afterUnmount: [
          (ap3): any => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', ap3.name);
          },
        ],
      },
    );

    start();
  }

  render() {
    return (
      <div>
        <IndexRouter />

        <div id='sub' />
      </div>
    );
  }
}

export default app;
