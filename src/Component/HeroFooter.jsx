import React from 'react';
import Herofoter from '../Assets/Footer1.png';
import { Hero } from './HeaderSection/Hero';

export const HeroFooter = () => {
    return (
        <header
            className="relative bg-cover bg-center h-[500px] rounded-lg flex items-center justify-end m-12" 
            style={{ backgroundImage: `url(${Herofoter})` }}
        >
            <div className="flex flex-col items-start  w-full max-w-lg"> 
                <Hero /> 
            </div>
        </header>
    );
}
