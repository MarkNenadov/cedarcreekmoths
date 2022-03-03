import React, { useState } from 'react';
import { MothSighting } from '../../model/MothingSighting';
import { SpeciesRow } from "../SpeciesRow";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons';

interface FamilyListingProps {
    familyName: string,
    sightings: MothSighting[]
}

export const FamilyListing = ( props: FamilyListingProps ) => {
    const { familyName, sightings } = props;

    const [expanded, setExpanded] = useState( false );

    const speciesNameMap = new Map();

    sightings.forEach( ( sighting ) => {
        if ( !speciesNameMap.has( sighting.scientificName ) ) {
            speciesNameMap.set( sighting.scientificName, [] );
        }

        speciesNameMap.get( sighting.scientificName ).push( sighting );
    } );

    return (
        <div className="m-5 w-full lg:w-1/4 ">
            <span 
                className="font-bold cursor-pointer underline"
                onClick={ () => setExpanded( !expanded ) }
                onKeyDown={ () => setExpanded( !expanded ) }
                role="button"
                tabIndex={ 0 }
            >
                { /*
                // @ts-ignore */ }
                <FontAwesomeIcon icon={ faUniversalAccess } />  
                <span className="pl-1">
                    Family: { familyName } ( { speciesNameMap.size } species )
                </span>
            </span>
            { expanded && (
                <div className='pt-2'>
                    {
                        ( Array.from( speciesNameMap.keys() ).sort().map( ( scientificName ) => {
                            return ( 
                                <SpeciesRow
                                    key={ scientificName }
                                    scientificName={ scientificName }
                                    sightings={ speciesNameMap.get( scientificName ) }
                                />
                            ); 
                        } ) )
                    }
                </div> 
            ) }
        </div>
    );
};
