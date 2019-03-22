import React, {Component} from 'react';
import './ArticleItem.css';

class ArticleItem extends Component {


    render() {
        let post = this.props.post;
        let objE = document.createElement("div");
        objE.innerHTML = post.excerpt.rendered;
        let excerpt = objE.innerText.toString();
        let tags = post.tags.map((tag) => {
            return tag;
        });
        return (
            <div className="listItem clearfix">
                <a className="list-left" href="">
                    <img src="https://up.enterdesk.com/edpic_source/9e/0e/e0/9e0ee081d361378367a925a2768dc2d0.jpg"
                         alt=""/>
                </a>
                <div className="list-right">
                    <span className="list-title">{post.title.rendered}</span>
                    <span className="list-excerpt">{excerpt}</span>
                    <div className="list-bottom clearfix">
                        <div className='list-tags'>
                            <span className="tag">{tags}</span>
                        </div>
                        <span className="list-date">{post.date}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleItem;