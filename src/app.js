import './app.less';
import test from './test.png';

const root = document.querySelector('#root');
const image = document.createElement('img');
image.src = test;
root.append(image);
