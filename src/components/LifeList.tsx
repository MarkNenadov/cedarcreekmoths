import React from 'react';
// import { KingdomListing } from './listings/KingdomListing';
import { SpeciesContainerProps } from './BaseProps';
// import { config } from '../config';

interface LifeListProps extends SpeciesContainerProps {
    fullName: string;
}

export const LifeList = ( props: LifeListProps ) => {
    console.log( props );
    // const { urls } = config;

    // const { fullName, speciesList } = props;
    return (
        <div>hey</div>
        // <div className="bg-white w-auto p-12">
        //     <span className="font-bold text-xl lg:text-xxl">
        //         { fullName }
        //         { "'s" }
        //         { ' ' }
        //         <a className={'underline'} href={ urls.inaturalist }>iNaturalist</a>
        //         { ' ' }
        //         Life List
        //     </span>
        //     <p className={'pb-2'}>
        //         Total species:
        //         { speciesList.length }
        //     </p>
        //     <KingdomListing speciesList={ speciesList } />
        //     <p>
        //         Source code (JavaScript/TypeScript/React):
        //         <a className={'underline'} href={ urls.gitHubProject }>github.com/MarkNenadov/inat-LL/</a>
        //     </p>
        // </div>
    );
};
