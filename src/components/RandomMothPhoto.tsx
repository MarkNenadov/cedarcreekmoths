import React from 'react';
import { MothSighting } from '../model/MothingSighting';

interface RandomMothPhotoProps {
    sighting: MothSighting
}

export const RandomMothPhoto = ( props: RandomMothPhotoProps ) => {
    const { sighting } = props;
    const { commonName, photoUrl, scientificName } = sighting;
    return (
        <div className="p-3 flex flex-col" >
            <span className="pl-4 font-bold">Random Moth Photo</span>
            <img className="h-64 p-3" alt={ `inaturalist: ${commonName}` } src={ photoUrl } />
            <span className="pl-4">{ commonName }</span>
            <span className="pl-4">{ `(${scientificName})` }</span>
        </div>
    );
};
