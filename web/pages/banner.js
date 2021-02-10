import React from 'react';
import TopImage from '../components/bannerHome/topImage'
import RightImage from '../components/bannerHome/rightImage'
import BottonImage from '../components/bannerHome/bottonImage'
import LeftImage from '../components/bannerHome/leftImage'

const Banner = () => {
    return (
        <div className=' bannerHome'>
            <TopImage />
            <RightImage />
            <BottonImage />
            <LeftImage />
        </div>
    )

};

export default Banner;