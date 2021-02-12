/* eslint-disable prefer-destructuring */
export class MothSighting {
    date: string;
    observationUrl: string;
    photoUrl: string;
    scientificName: string;
    commonName: string;
    superFamily: string;
    family: string;
    subFamily: string;

    constructor( rowData: string[] ) {
        this.date = rowData[1];
        this.observationUrl = rowData[2];
        this.photoUrl = rowData[3];
        this.scientificName = rowData[4];
        this.commonName = rowData[5];
        this.superFamily = rowData[7];
        this.family = rowData[8];
        this.subFamily = rowData[9];
    }

    static getFirstAndLastSighting = ( sightings: MothSighting[] ) => {
        const sightingDays = sightings.map( ( sighting ) => sighting.date.substring( 5 ) ).sort();
        const firstSighting = sightingDays[0];
        const lastSighting = sightings.length === 0 ? sightingDays[0] : sightingDays[sightingDays.length - 1];  

        return [firstSighting, lastSighting];
    }

    static getSightingsByFamilyMap = ( sightings: MothSighting[] ) : Map<string, []> => {
        const speciesByFamilyMap = new Map();
    
        sightings.forEach( ( species ) => {
            if ( !speciesByFamilyMap.has( species.family ) ) {
                speciesByFamilyMap.set( species.family, [] );
            }
    
            speciesByFamilyMap.get( species.family ).push( species );
        } );
    
        return speciesByFamilyMap;
    }    
}
