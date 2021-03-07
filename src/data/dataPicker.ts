import { config } from '../config';
import { cedarCreekCsvData } from './CedarCreekMothData';
import { maidstoneCsvData } from './MaidstoneCAMothData';

/* eslint-disable import/no-mutable-exports */ 
let csvData = "";
if ( config.siteName.startsWith( "Cedar Creek" ) ) {
    csvData = cedarCreekCsvData;
} else {
    csvData = maidstoneCsvData;
}

export { csvData };
