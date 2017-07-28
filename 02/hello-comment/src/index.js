//渲染应用组件
/*
  如果要导入css文件
  直接
  import './index.css'  
*/
import React from 'react'; //引入第三方模块
import { render } from 'react-dom'; //引入第三方模块
//import ReactDom from 'react-dom';
import App from './components/App/App'; //引入自定义模块需要加路径

render(<App />, document.getElementById('app'));