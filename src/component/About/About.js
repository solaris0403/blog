import React, {Component} from 'react';

class About extends Component {
    componentDidMount() {
        let WPAPI = require('wpapi');
        let wp = new WPAPI({endpoint: 'http://www.itenn.cc/index.php/wp-json'});
        wp.posts().then(function (response) {
            console.log(response);
        });
    }

    render() {
        return (
            <div>
                About
            </div>
        )
    }
}

export default About;