import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';
import { parseSightings } from './utils/ParsingUtils';
import { FamilyListing } from './components/listings/FamilyListing';
import { AppFooter } from "./components/AppFooter";
import { RandomMothPhotos } from "./components/RandomMothPhoto";
import { MothSighting } from './model/MothingSighting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import 'react-popper-tooltip/dist/styles.css';
import { usePopperTooltip } from 'react-popper-tooltip';
import { YearStatsTooltip } from './components/YearStatsTooltip';
import { config, selectConfigById, getSiteOptions } from './config';

const App: React.FC = () => {
    const [currentConfig, setCurrentConfig] = useState( config );

    document.title = currentConfig.siteName;

    const sightings = parseSightings( currentConfig.csvData );
    const sightingsByFamilyMap = MothSighting.getSightingsByFamilyMap( sightings );

    const speciesCount = [...new Set( sightings.map( ( sighting ) => sighting.scientificName ) )].length;

    const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip();

    const siteOptions = getSiteOptions();

    return (
        <div className='App bg-green-100 border border-black m-5 rounded-lg'>
            <div className='flex flex-col m-3 p-2 w-5/8'>
                <div className='font-bold text-xxl mb-5'>
                    <Select
                        className={ "basic-single" }
                        classNamePrefix={ "select" }
                        defaultValue={ siteOptions[0] }
                        options={ siteOptions }
                        value={ siteOptions.filter( ( option ) => option!.value === currentConfig.id ) }
                        isSearchable={ currentConfig.siteName }
                        onChange={ ( selectedOption ) => {
                            const matchingConfig = selectConfigById( selectedOption!.value );

                            if ( matchingConfig ) {
                                setCurrentConfig( matchingConfig );
                            }
                        } }
                    />
                </div>
                <div className='flex flex-col lg:flex-row justify-between pb-2 pl-2'>
                    <div>
                        An inventory of moth species found at
                        &nbsp;
                        { currentConfig.locationName }
                        &nbsp;
                        in Essex County, Ontario, Canada.
                    </div>
                    <div className="mt-2 md:mt-0">
                        { /*
                        // @ts-ignore */ }
                        <FontAwesomeIcon icon={ faInfoCircle } /> 
                        <span className='pl-2 pr-2'>
                            TIP: Click on Family to see Species. Select a Species to see photo and more details.
                        </span>
                    </div>
                </div>
                <div className="pl-2 text-center sm:text-left pb-1">
                    <span className="hover:bg-gray-300 cursor-pointer" ref={ setTriggerRef }><span className="underline font-bold">{ speciesCount }</span> </span>
                    species across { sightingsByFamilyMap.size } families

                    <YearStatsTooltip 
                        getTooltipProps={ getTooltipProps }
                        setTooltipRef={ setTooltipRef }
                        visible={ visible }
                        sightings={ sightings }
                    />
                </div>
                <div className='flex flex-no-wrap flex-col lg:flex-row lg:flex-wrap bg-white border border-black rounded-lg'>
                    <div className='w-3/4'>
                    {
                        Array.from( sightingsByFamilyMap.keys() ).sort().map( ( familyName ) => {
                            return (
                                <FamilyListing 
                                    key={ familyName }
                                    familyName={ familyName } 
                                    sightings={ sightingsByFamilyMap.get( familyName ) || [] }
                                />
                            );
                        } ) 
                    }
                    </div>
                    <RandomMothPhotos 
                        sightings={ [
                            sightings[Math.floor( Math.random() * sightings.length )],
                            sightings[Math.floor( Math.random() * sightings.length )],
                            sightings[Math.floor( Math.random() * sightings.length )],
                            sightings[Math.floor( Math.random() * sightings.length )],
                        ] }
                    />
                </div>

                <AppFooter />
            </div>
        </div>
    );
};

export default App;
