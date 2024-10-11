import React from 'react';
import ResponsiveAppBar from './Header';
// import  FooterWithLogo from './Footer';
import { FooterWithLogo } from './Footer';
import Footer from './Footer';
import MediaCard from './ImageUploader';

export default function DashBoard(){
    return( <div>
            <ResponsiveAppBar/>
            <MediaCard/>
            {/* <Footer/> */}
        </div>
    )

}