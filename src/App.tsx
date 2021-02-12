import React from 'react';
import './App.css';
import { csvData } from './data/CedarCreekMothData';
import { parseSightings } from './utils/ParsingUtils';
import { FamilyListing } from './components/listings/FamilyListing';
import { AppFooter } from "./components/AppFooter";
import { RandomMothPhoto } from "./components/RandomMothPhoto";
import { MothSighting } from './model/MothingSighting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
    const sightings = parseSightings( csvData );
    const sightingsByFamilyMap = MothSighting.getSightingsByFamilyMap( sightings );

    return (
        <div className='App bg-green-100  border border-black m-5'>
            <div className='flex flex-col m-3 p-2 w-5/8'>
                <div className='font-bold text-xxl mb-5'>Cedar Creek Moths</div>
                <div className='flex flex-row justify-between pb-2'>
                    <div>An inventory of moth species found at Cedar Creek Conservation Area in Essex County, Ontario, Canada.</div>
                    <div className="hidden md:block">
                        <FontAwesomeIcon icon={ faInfoCircle } /> 
                        <span className='pl-2'>
                            TIP: Click on Family to see Species. Hover over Species to see photo and more details.
                        </span>
                    </div>
                </div>
                <div className='flex flex-no-wrap flex-col lg:flex-row lg:flex-wrap bg-white border border-black'>
                    {
                        Array.from( sightingsByFamilyMap.keys() ).map( ( familyName ) => {
                            return (
                                <FamilyListing 
                                    key={ familyName }
                                    familyName={ familyName } 
                                    sightings={ sightingsByFamilyMap.get( familyName ) || [] }
                                />
                            );
                        } ) 
                    }
                    <RandomMothPhoto 
                        sighting={ sightings[Math.floor( Math.random() * sightings.length )] }
                    />
                </div>

                <AppFooter />
            </div>
        </div>
    );
};

export default App;
