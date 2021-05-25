import * as CSV from 'csv-string';
import { MothSighting } from '../model/MothingSighting';

export const parseSightings = ( csvData: string ) => {
    const result : MothSighting[] = [];

    CSV.parse( csvData ).forEach( ( row: string[] ) => result.push( new MothSighting( row ) ) );

    return result;
};

export const parseDateString = ( value : string ) => {
    return value
        .replace( "03-", "March " )
        .replace( "04-", "April " )
        .replace( "05-", "May " )
        .replace( "06-", "June " )
        .replace( "07-", "July " )
        .replace( "08-", "August " )
        .replace( "09-", "September " )
        .replace( "10-", "October " );
};
