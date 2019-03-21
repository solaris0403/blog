import React, {Component} from 'react';
import './Header.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

let imgSrc = require('../../images/logo.png');


class Header extends Component {
    render() {
        return (
            <div className='header'>
                <header>
                    <div className='logo'>
                        <img src={imgSrc} alt="logo"/>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">首页</Link>
                        </li>
                        <li><a href="">文章</a></li>
                        <li><a href="">摄影</a></li>
                        <li><Link to="/message">留言</Link></li>
                        <li><Link to="/about">关于</Link></li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Header;
