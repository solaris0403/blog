import React, {Component} from 'react';
import 'normalize.css';
import './App.css';
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
