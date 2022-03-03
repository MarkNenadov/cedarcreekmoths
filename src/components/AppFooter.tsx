import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export const AppFooter = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-between mt-2'>
            <div>
                { /*
                // @ts-ignore */ }
                <FontAwesomeIcon icon={ faCopyright } /> 
                <span className='pl-1'>
                    Mark Nenadov 2021. <a className='underline' href='mailto:marknenadov@gmail.com'>marknenadov@gmail.com</a>
                </span>
            </div>
            <div className='mt-2 lg:mt-0'>
                { /*
                // @ts-ignore */ }
                <FontAwesomeIcon icon={ faThumbsUp } /> 
                <span className='pl-1'>
                    Special thanks to a number of people who&apos;ve mothed with me at Cedar Creek Conservation Area, including:
                    Moe B., Dwayne M., Kit M., David B., Michael K., Jeremy B., Josh V., Baz C., Steve P., Xander C., Mel D., Derek S., and others.
                </span>
            </div>
        </div>
    );
};
