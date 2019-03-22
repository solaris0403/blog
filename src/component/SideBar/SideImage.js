import React, {Component} from 'react';
import './SideImage.css';

class SideImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'link': '',
            'image': '',
            'title': ''
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log(nextProps);
        this.setState({
            'link': nextProps.link,
            'image': nextProps.image,
            'title': nextProps.title
        })
    }

    render() {
        console.log('SideImage render');
        return (
            <div className='SideImage'>
                <div className='cover-container'>
                    <img className='cover-img' src={this.props.image}
                         alt=""/>
                </div>
                <span className='cover-description'>{this.props.title}</span>
            </div>
        );
    }
}

export default SideImage;