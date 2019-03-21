import React, {Component} from 'react';
import './Article.css';
import ArticleItem from "../ListItem/ArticleItem";

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let WPAPI = require('wpapi');
        let wp = new WPAPI({endpoint: 'http://www.itenn.cc/index.php/wp-json'});
        wp.posts().then((response) => {
            this.setState(response);
        });
    }

    render() {
        let content = Object.values(this.state).map((item) => {
            if (item.hasOwnProperty('id')) {
                return <ArticleItem post={item}/>;
            }
        });
        return (
            <div className="Article">
                {content}
            </div>
        );
    }
}

export default Article;