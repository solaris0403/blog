import React, {Component} from 'react';
import 'normalize.css';
import './App.css';
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import 'antd/dist/antd.css';
import {Affix} from 'antd';
import Content from "./component/Content/Content";


class App extends Component {
    render() {
        return (
            <div className="App">
                <Affix offsetTop={0}>
                    <Header/>
                </Affix>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
