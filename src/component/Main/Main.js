import React, {Component} from 'react';
import './Main.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class Main extends Component {
    render() {
        return (
            <div className="main clearfix">
                <Content/>
                <SideBar/>
            </div>
        )
    }
}


class Content extends Component {
    componentDidMount() {
        // let WPAPI = require('wpapi');
        // let wp = new WPAPI({endpoint: 'http://www.itenn.cc/index.php/wp-json'});
        // wp.posts().then(function (response) {
        //     console.log(response);
        // });
    }

    render() {
        return (
            <div className='content'>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/message" component={Message}/>
            </div>
        )
    }
}

class About extends Component {
    render() {
        return (
            <div>
                About
            </div>
        )
    }
}

class Message extends Component {
    render() {
        return (
            <div>
                Message
            </div>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

class ListItem extends Component {
    render() {
        return (
            <div className="listItem">
                <a className="list-left" href="">
                    <img src="https://up.enterdesk.com/edpic_source/9e/0e/e0/9e0ee081d361378367a925a2768dc2d0.jpg"
                         alt=""/>
                </a>
                <div className="list-right">
                    <span className="list-title">情形我还有音乐</span>
                    <span className="list-description">要实现移动端的滑动，必须要的元素有：</span>
                    <div className="list-bottom">
                        <span className="list-tags">清新 节奏 音乐</span>
                        <span className="list-date">2019-03-18</span>
                        <span className="list-comment">评论</span>
                        <span className="list-views">浏览</span>
                    </div>
                </div>
            </div>
        )
    }
}

class SideBar extends Component {
    render() {
        return (
            <div className='sidebar'>

            </div>
        )
    }
}

export default Main;
