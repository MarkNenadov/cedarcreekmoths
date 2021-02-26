import React from 'react';
import { MothSighting } from "../model/MothingSighting";

interface YearStatsTooltipProps {
    visible: boolean,
    sightings: MothSighting[],
    getTooltipProps: any,
    setTooltipRef: any
}

export const YearStatsTooltip = ( props: YearStatsTooltipProps ) => {
    const { visible, sightings, setTooltipRef, getTooltipProps } = props;

    const yearSpeciesTotalMap = ( function () {
        const yearMap = new Map();

        sightings.forEach( ( sighting ) => {
            const year = sighting.date.split( "-" )[0];
            if ( !yearMap.has( year ) ) {
                yearMap.set( year, 0 );
            }
        } );
    
        Array.from( yearMap.keys() ).forEach( ( key ) => {
            const sightingsForThisYear = sightings.filter( ( sighting ) => sighting.date.startsWith( key ) ); 
            
            yearMap.set( key, [...new Set( sightingsForThisYear.map( ( sighting ) => sighting.scientificName ) )].length );
        } );
        
        return yearMap;
    }() );

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
                            <span className="font-bold">Yearly Stats</span>
                            <div>
                                {
                                    Array.from( yearSpeciesTotalMap.keys() ).map( ( key ) => (
                                        <div key={ key }>
                                            { key }: { yearSpeciesTotalMap.get( key ) } species
                                        </div>
                                    ) )
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
};
