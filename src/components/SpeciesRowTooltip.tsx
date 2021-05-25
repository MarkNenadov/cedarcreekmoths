import React from 'react';
import { MothSighting } from "../model/MothingSighting";
import { parseDateString } from '../utils/ParsingUtils';

interface SpeciesRowTooltipProps {
    visible: boolean,
    sightings: MothSighting[],
    getTooltipProps: any,
    setTooltipRef: any
}

export const SpeciesRowTooltip = ( props: SpeciesRowTooltipProps ) => {
    const { visible, sightings, setTooltipRef, getTooltipProps } = props;
    const [firstSighting, lastSighting] = MothSighting.getFirstAndLastSighting( sightings );
    const { commonName, scientificName } = sightings[0];
    const randomSighting = sightings[Math.floor( Math.random() * sightings.length )];

    let knownFlightSeasonValue = parseDateString( firstSighting );
    if ( sightings.length > 1 ) {
        knownFlightSeasonValue = `${knownFlightSeasonValue} to ${parseDateString( lastSighting )}`;
    }

    return (
        <div>
            { 
                visible && (
                    <div 
                        ref={ setTooltipRef }
                        { ...getTooltipProps( { className: 'tooltip-container' } ) }
                    >
                        <div 
                        >
                            <div className="font-bold text-lg">
                                { scientificName }
                                {
                                    !!sightings[0].commonName && (
                                        <>
                                            &nbsp;
                                            ({ sightings[0].commonName })
                                        </>
                                    )
                                }
                            </div>
                            <div>{ sightings.length } sighting{ sightings.length > 1 ? "s" : "" }</div>
                            <div>Known Flight Season: { knownFlightSeasonValue }</div> 
                            { !!randomSighting.photoUrl && <img alt={ `inaturalist: ${commonName}` } src={ randomSighting.photoUrl } /> }
                        </div>
                    </div>
                )
            }
        </div>

    );
};
