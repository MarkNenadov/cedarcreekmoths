import React, { useState } from 'react';
import { MothSighting } from './../../model/MothingSighting';
import { SpeciesRow } from "./../SpeciesRow";

interface FamilyListingProps {
    familyName: string,
    sightings: MothSighting[]
}

export const FamilyListing = ( props: FamilyListingProps ) => {
    const { familyName, sightings } = props;

    const [expanded, setExpanded] = useState( false );
    const [isRowHovered, setIsRowHovered] = useState( false );

    const speciesNameMap = new Map();

    sightings.forEach( ( sighting ) => {
        if ( !speciesNameMap.has( sighting.scientificName ) ) {
            speciesNameMap.set( sighting.scientificName, [] );
        }

        speciesNameMap.get( sighting.scientificName ).push( sighting );
    })

    return (
        <div className="m-5">
            <span 
                className="font-bold cursor-pointer"
                onClick={ (_) => setExpanded( !expanded ) }
                onMouseOver={ () => setIsRowHovered( true ) }
                onMouseOut={ () => setIsRowHovered( false ) }
            >
                 { ( isRowHovered ) && ( expanded ? "-" : "+" ) } Family: { familyName  } ({speciesNameMap.size} species)
            </span>
            { expanded && <div>
            {
                (Array.from( speciesNameMap.keys() ).map( ( scientificName ) => {
                    return ( 
                        <SpeciesRow
                            scientificName={scientificName }
                            sightings={ speciesNameMap.get( scientificName )}
                        />
                    ); 
                }))
            }
            </div> }


            {/* {
                Array.from( speciesNameMap.keys() ).map( ( scientificName ) => <h3>Hey</h3> );
            } */}
        </div>
    );
}