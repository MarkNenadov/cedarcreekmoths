import { cedarCreekCsvData } from './data/CedarCreekMothData';
import { maidstoneCsvData } from './data/MaidstoneCAMothData';
import { ojibwayCsvData } from './data/OjibwayMothData';

const cedarCreekConfig = {
    id: "cedarcreek",
    siteName: "Cedar Creek Moths",
    locationName: "Cedar Creek Conservation Area",
    csvData: cedarCreekCsvData,
    urls: {
        gitHubProject: 'https://github.com/MarkNenadov/cedarcreekmoths/',
    },
};

const maidstoneConfig = {
    id: "maidstone",
    siteName: "Maidstone Conservation Area Moths",
    locationName: "Maidsatone Conservation Area",
    csvData: maidstoneCsvData,
    urls: {
        gitHubProject: 'https://github.com/MarkNenadov/cedarcreekmoths/',
    },
};

const ojibwayConfig = {
    id: "ojibway",
    siteName: "Ojibway Prairie Complex Moths",
    locationName: "Ojibway Prairie Complex",
    csvData: ojibwayCsvData,
    urls: {
        gitHubProject: 'https://github.com/MarkNenadov/cedarcreekmoths/',
    },
};

const configs = [ojibwayConfig, cedarCreekConfig, maidstoneConfig];

const configUrlMapping = new Map<string, any>();

configUrlMapping.set( 'http://127.0.0.1:3000/', ojibwayConfig );
configUrlMapping.set( 'http://localhost:3000/', cedarCreekConfig );
configUrlMapping.set( 'http://ojibwaymoths.marknenadov.com/', ojibwayConfig );
configUrlMapping.set( 'http://cedarcreekmoths.marknenadov.com/', cedarCreekConfig );

export const selectConfigById = ( id: string ) => {
    const matchingConfigs = configs.filter( ( config ) => config.id === id );

    if ( matchingConfigs ) {
        return matchingConfigs[0];
    }

    return undefined;
};

export const getSiteOptions = () => {
    return configs.map( ( config ) => {
        return { 
            value: config.id, 
            label: config.siteName,
        }; 
    } );
};

export const config = configUrlMapping.get( window.location.href );
