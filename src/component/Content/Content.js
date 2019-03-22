import React, {Component} from 'react';
import './Content.css';
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import Article from "../Article/Article";
import Picture from "../Picture/Picture";
import About from "../About/About";
import Message from "../Message/Message";
import SideImage from "../SideBar/SideImage";
import Author from "../SideBar/Author";

class Content extends Component {
    render() {
        return (
            <div className="main clearfix">
                <Main/>
                <SideBar/>
            </div>
        )
    }
}


class Main extends Component {
    componentDidMount() {
        console.log('Main componentDidMount')
    }

    render() {
        return (
            <div className='content'>
                <Route exact path="/" component={Home}/>
                <Route path="/article" component={Article}/>
                <Route path="/picture" component={Picture}/>
                <Route path="/about" component={About}/>
                <Route path="/message" component={Message}/>
            </div>
        )
    }
}

function HomeSideBar() {
    console.log('HomeSideBar');
    return (
        <div>
            <SideImage image='https://img2.woyaogexing.com/2019/03/20/0d567917f0874529ac68f72f58811afd!600x600.jpeg' title='编辑整理,是唯美图片中'/>
            <SideImage image='http://pics.sc.chinaz.com/files/pic/pic9/201812/zzpic15577.jpg' title='编辑整理,是唯美图片中'/>
        </div>
    );
}


class SideBar extends Component {
    componentDidMount() {
        console.log('SideBar componentDidMount')
    }

    render() {
        return (
            <div className='sidebar'>
                <Route exact path="/" component={HomeSideBar}/>
                <Route path="/article" component={Author}/>
            </div>
        )
    }
}

export default Content;
