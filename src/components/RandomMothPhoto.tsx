import React from 'react';
import { MothSighting } from '../model/MothingSighting';

interface RandomMothPhotoProps {
    sightings: MothSighting[]
}

export const RandomMothPhotos = ( props: RandomMothPhotoProps ) => {
    const { sightings } = props;
    //const { commonName, photoUrl, scientificName } = sighting;
    return (
        <div className="p-3 flex flex-col p-2 m-4 w-96">
            <span className="pl-4 font-bold">Random Moth Photos</span>
            {
                sightings.map( ( sighting ) => {
                    return (
                        <div>
                            <img className="h-64 p-3" alt={ `inaturalist: ${sighting.commonName}` } src={ sighting.photoUrl } />
                            <span className="pl-4">{ sighting.commonName }</span>
                            <span className="pl-4">{ `(${sighting.scientificName})` }</span>
                        </div>
                    );
                } )
            }
        </div>
    );
};
