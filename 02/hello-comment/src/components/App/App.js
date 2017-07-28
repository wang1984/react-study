/**
 * Created by xfzhang on 2016/11/27.
 * 应用主组件
 */
/*
  如果要导入css文件
  直接
  import './index.css'  
*/
/*
  向外暴露一些东西并引入进来
*/
/*
  只有js文件可以不加后缀名
*/
import React from 'react'; //引入第三方模块
import CommentAdd from '../CommentAdd'; //引入自定义模块需要加路径
import CommentList from '../CommentList';//引入自定义模块需要加路径


class App extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      comments: []
    };

    this.delete = this.delete.bind(this);
  }

  componentDidMount () {
    //获取初始化数据
    let comments = [
      {
        username: "Tom",
        content: "ReactJS好难啊!",
        id: Date.now()
      },
      {
        username: "JACK",
        content: "ReactJS还不错!",
        id: Date.now() + 1
      }
    ];
    this.setState({ comments });
  }

  add = (comment) => {
    let comments = this.state.comments;
    comments.unshift(comment);
    this.setState({ comments })
  } //箭头函数不用指定bind（this）,它自动向外寻找this

  delete (index) {
    let comments = this.state.comments;
    comments.splice(index, 1);
    this.setState({ comments });
  }

  render () {
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <CommentAdd add={this.add}/>
          <CommentList comments={this.state.comments} delete={this.delete}/>
        </div>
      </div>
    );
  }
}

export default App;