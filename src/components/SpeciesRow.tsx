import React, { useState } from 'react';
import { MothSighting } from './../model/MothingSighting';

interface SpeciesRowProps{
    scientificName: string,
    sightings: MothSighting[]
}

export const SpeciesRow = ( props: SpeciesRowProps) => {
    const { scientificName, sightings } = props;

    const [showDetails, setShowDetails] = useState( false );
    const [isRowHovered, setIsRowHovered] = useState( false );

    const sightingDays = sightings.map( ( sighting ) => sighting.date.substring( 5 ) ).sort();
    
    const firstSighting = sightingDays[0];
    const lastSighting = sightings.length === 0 ? sightingDays[0] : sightingDays[sightingDays.length - 1]

    const formatDate = ( value : string ) => {
        return value.replace( "07-", "July ").replace( "06-", "June ").replace( "08-", "August " ).replace( "09-", "September ").replace( "10-", "October ");
    }

    const knownFLightSeasonValue = sightings.length > 1 ? formatDate( firstSighting ) + " to " + formatDate( lastSighting ) : formatDate( firstSighting );

    return (
        <div 
            className="pb-3 w-full"
            >
            <div
                 className="hover:bg-gray-300 cursor-pointer flex flex-col pl-2"
                 onMouseOver={ () => setIsRowHovered( true ) }
                 onMouseOut={ () => setIsRowHovered( false ) }
                 onClick={ (_) => setShowDetails( !showDetails ) }
                 >
                 { ( isRowHovered ) && ( showDetails ? "-" : "+" ) } {scientificName} ({sightings[0].commonName})
            </div>
            { 
                showDetails && (
                    <div className="border border-black pl-8">
                        <div>{sightings.length} sightings</div>
                        <div>Known Flight Season: { knownFLightSeasonValue }
                        </div> 
                    </div>
                )
            }
        </div>
    );
}