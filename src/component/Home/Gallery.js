import React, {Component} from 'react';
import './Gallery.css';
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css';

class Gallery extends Component {
    componentDidMount() {
        let mySwiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            }
        });
    }

    render() {
        return (
            <div className='gallery'>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className='swiper-slide'>
                            <img src="http://pics.sc.chinaz.com/files/pic/pic9/201812/zzpic15577.jpg" alt=""/>
                        </div>
                        <div className='swiper-slide'>
                            <img src="http://wmtp.net/wp-content/uploads/2017/07/0714_sex917_5.jpeg" alt=""/>
                        </div>
                        <div className='swiper-slide'>
                            <img src="http://img1.mm131.me/pic/3454/23.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"/>
                </div>
            </div>
        );
    }
}

export default Gallery;