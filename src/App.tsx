import React from 'react';
import './App.css';
import { csvData } from './data/CedarCreekMothData';
import { parseSpecies } from './utils/ParsingUtils';
import { FamilyListing } from './components/listings/FamilyListing';

const App: React.FC = () => {
    const speciesList = parseSpecies( csvData );

    const speciesByFamilyMap = new Map();

    speciesList.forEach( ( species ) => {
        if ( !speciesByFamilyMap.has( species.family ) ) {
            speciesByFamilyMap.set( species.family, [] );
        }

        speciesByFamilyMap.get( species.family ).push( species );
    } );

    console.log( speciesList );
    return (
        <div className="App">
            <div className="flex flex-col m-3 p-2 w-5/8">
                <div className="font-bold text-xxl mb-5">Cedar Creek Moths</div>
                <div>An inventory of moth species found at Cedar Creek Conservation Area in Essex County, Ontario, Canada.</div>
                <div className="w-full border-b border-black" />
                <div>
                    {
                        Array.from( speciesByFamilyMap.keys() ).map( ( familyName ) => {
                            return (
                                <FamilyListing 
                                    familyName={ familyName } 
                                    sightings={ speciesByFamilyMap.get( familyName ) }
                                />
                            );
                    } )
                    }
                </div>
            </div>
        </div>
    );
};

export default App;
