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
        this.subFamily = rowData[9]
    }

    // static sortByName( species: Species[] ) {
    //     return species.sort( ( a: Species, b: Species ): number => ( `${a.name}` ).localeCompare( b.name ) );
    // }

    // static filterByKingdom( speciesList: Species[], kingdomName: string ) {
    //     return speciesList.filter( ( species ) => species.kingdom === kingdomName );
    // }

    // static filterByClass( speciesList: Species[], className: string ) {
    //     return speciesList.filter( ( species ) => species.class === className );
    // }

    // static filterByOrder( speciesList: Species[], orderName: string ) {
    //     return speciesList.filter( ( species ) => species.order === orderName );
    // }

    // static deriveSubNamesFromOrderSpecies( speciesList: Species[] ) {
    //     const namesFromSuperFamiles = speciesList.map( ( species ) => species.nameFromSuperFamily() );
    //     const speciesSubNames = namesFromSuperFamiles.filter( ( superFamily ) => superFamily !== '' );

    //     return speciesSubNames.filter( ( item: string, index: number ) => speciesSubNames.indexOf( item ) === index );
    // }

    // static filterByOrderSubName( speciesList: Species[], orderSubName: string ) {
    //     if ( orderSubName === 'Butterflies' ) {
    //         return speciesList.filter( ( species ) => species.superFamily === 'Papilionoidea' );
    //     }
    //     return speciesList.filter( ( species ) => species.superFamily !== 'Papilionoidea' );
    // }

    // public nameFromSuperFamily(): string {
    //     if ( this.order !== 'Lepidoptera' ) {
    //         return '';
    //     }

    //     if ( this.superFamily === 'Papilionoidea' ) {
    //         return 'Butterflies';
    //     }
    //     return 'Moths';
    // }
}
