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
            >
                 <FontAwesomeIcon icon={ faUniversalAccess } />  
                 Family: { familyName } ({speciesNameMap.size} species)
            </span>
            { expanded && (
                <div>
                    {
                        ( Array.from( speciesNameMap.keys() ).sort().map( ( scientificName ) => {
                            return ( 
                                <SpeciesRow
                                    key={ scientificName }
                                    scientificName={scientificName }
                                    sightings={ speciesNameMap.get( scientificName )}
                                />
                            ); 
                        } ) )
                    }
                </div> 
            )}
        </div>
    );
};
