import React from 'react';
import { MothSighting } from '../model/MothingSighting';
import { usePopperTooltip } from 'react-popper-tooltip';
import { SpeciesRowTooltip } from "./SpeciesRowTooltip";
import 'react-popper-tooltip/dist/styles.css';

interface SpeciesRowProps{
    scientificName: string,
    sightings: MothSighting[]
}

export const SpeciesRow = ( props: SpeciesRowProps ) => {
    const { scientificName, sightings } = props;

    const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip();
      
    return (
        <div className="pb-3 w-full">
            <div
                className="hover:bg-gray-300 cursor-pointer flex flex-col pl-2"
                ref={setTriggerRef}
            >
                 { scientificName } ({ sightings[0].commonName })
            </div>

            <SpeciesRowTooltip 
                sightings={ sightings }
                setTooltipRef={ setTooltipRef }
                getTooltipProps={ getTooltipProps }
                visible={ visible }
            />
        </div>
    );
};
