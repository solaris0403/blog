import React, {Component} from 'react';
import './Main.css';
import {Route} from "react-router-dom";
import Home from "../Home/Home";
import Article from "../Article/Article";
import Picture from "../Picture/Picture";
import About from "../About/About";
import Message from "../Message/Message";


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


class SideBar extends Component {
    render() {
        return (
            <div className='sidebar'>

            </div>
        )
    }
}

export default Main;
