import React, {Component} from 'react';

class ArticleItem extends Component {
    render() {
        let post = this.props.post;
        let objE = document.createElement("div");
        objE.innerHTML = post.content.rendered;
        let content = objE.innerText.toString();
        return (
            <div className="listItem">
                <a className="list-left" href="">
                    <img src="https://up.enterdesk.com/edpic_source/9e/0e/e0/9e0ee081d361378367a925a2768dc2d0.jpg"
                         alt=""/>
                </a>
                <div className="list-right">
                    <span className="list-title">{post.title.rendered}</span>
                    <span className="list-description">{content}</span>
                    <div className="list-bottom">
                        <span className="list-tags">清新 节奏 音乐</span>
                        <span className="list-date">2019-03-18</span>
                        <span className="list-comment">评论</span>
                        <span className="list-views">浏览</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleItem;