import React, {Component} from 'react';
import './Header.css';
import {Link, Route} from "react-router-dom";

let imgSrc = require('../../images/logo.png');


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.getStyle = this.getStyle.bind(this);
    }

    handleClick(index) {
        this.setState({
            active: index
        });
    }


    getStyle = (index) => {
        return {
            color: this.state.active === index ? "#71a866" : "#444444"
        }
    };


    render() {
        return (
            <div className='header'>
                <header>
                    <div className='logo'>
                        <img src={imgSrc} alt="logo"/>
                    </div>
                    <ul>
                        <li>
                            <Link to="/" class="link" style={this.getStyle(0)}
                                  onClick={() => this.handleClick(0)}>首页</Link>
                        </li>
                        <li>
                            <Link to="/article" class="link" style={this.getStyle(1)}
                                  onClick={() => this.handleClick(1)}>文章</Link>
                        </li>
                        <li>
                            <Link to="/picture" class="link" style={this.getStyle(2)}
                                  onClick={() => this.handleClick(2)}>摄影</Link>
                        </li>
                        <li>
                            <Link to="/message" class="link" style={this.getStyle(3)}
                                  onClick={() => this.handleClick(3)}>留言</Link>
                        </li>
                        <li>
                            <Link to="/about" class="link" style={this.getStyle(4)}
                                  onClick={() => this.handleClick(4)}>关于</Link>
                        </li>
                    </ul>
                </header>
            </div>
        )
    }
}

export default Header;
