import React, {Component} from 'react';
import Gallery from "./Gallery";
import './Home.css';


class Home extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('Home componentDidUpdate')
    }

    render() {
        console.log(this.props);
        return (
            <div className='home'>
                <Gallery/>
            </div>
        );
    }
}

export default Home;