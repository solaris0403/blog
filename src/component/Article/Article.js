import React, {Component} from 'react';
import './Article.css';
import ArticleItem from "../ListItem/ArticleItem";
import {Pagination} from 'antd';


const pageSize = 10;
const initPage = 1;

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'posts': [],
            'total': 0,
            'totalPages': 0,
        };
    }

    componentDidMount() {
        this.fetchPosts(initPage);
    }

    fetchPosts = (page) => {
        let WPAPI = require('wpapi');
        let wp = new WPAPI({endpoint: 'http://www.itenn.cc/index.php/wp-json'});
        wp.posts()
            .param('per_page', pageSize)
            .param('page', page)
            .then((response) => {
                let posts = [];
                Object.values(response).map((post) => {
                    if (post.hasOwnProperty('id')) {
                        posts.push(post);
                    }
                });
                console.log('posts', posts);
                let total = response['_paging']['total'];
                let totalPages = response['_paging']['totalPages'];
                this.setState({
                    'posts': posts,
                    'total': total,
                    'totalPages': totalPages
                });
            });
    };

    onChange = (page) => {
        this.fetchPosts(page);
    };

    render() {
        let paginationStyle = {
            visibility: this.state.total < pageSize ? 'hidden' : 'visible'
        };
        let posts = this.state.posts.map((post) => {
            return <ArticleItem post={post}/>;
        });
        return (
            <div className="Article">
                {posts}
                <Pagination
                    className='pagination'
                    onChange={this.onChange}
                    style={paginationStyle}
                    total={this.state.total}
                    defaultPageSize={pageSize}
                    defaultCurrent={initPage}/>
            </div>
        );
    }
}

export default Article;