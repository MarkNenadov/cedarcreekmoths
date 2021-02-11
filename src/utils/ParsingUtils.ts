// @ts-ignore
import CSV from 'csv-string';
import { MothSighting } from '../model/MothingSighting';

export const parseSpecies = ( csvData: string ) => {
    const result : MothSighting[] = [];

    CSV.parse( csvData ).forEach( ( row: string[] ) => {
        const species = new MothSighting( row );
        result.push( species );
    } );

    return result;
};

/*if ( row[0] !== 'kingdom' ) {
    const species = new Species( row );
    if ( species.name.includes( ' ' ) ) {
        result.push( species );
    }
}*/
