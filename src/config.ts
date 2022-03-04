import { cedarCreekCsvData } from './data/CedarCreekMothData';
import { maidstoneCsvData } from './data/MaidstoneCAMothData';
import { ojibwayCsvData } from './data/OjibwayMothData';

const cedarCreekConfig = {
    siteName: "Cedar Creek Moths",
    locationName: "Cedar Creek Conservation Area",
    csvData: cedarCreekCsvData,
    urls: {
        gitHubProject: 'https://github.com/MarkNenadov/cedarcreekmoths/',
    },
};

const maidstoneConfig = {
    siteName: "Maidstone Conservation Area Moths",
    locationName: "Maidsatone Conservation Area",
    csvData: maidstoneCsvData,
    urls: {
        gitHubProject: 'https://github.com/MarkNenadov/cedarcreekmoths/',
    },
};

const ojibwayConfig = {
    siteName: "Ojibway Prairie Complex Moths",
    locationName: "Ojibway Prairie Complex",
    csvData: ojibwayCsvData,
    urls: {
        gitHubProject: 'https://github.com/MarkNenadov/cedarcreekmoths/',
    },
};

const configMapping = new Map<string, any>();
configMapping.set( 'http://127.0.0.1:3000/', ojibwayConfig );
configMapping.set( 'http://localhost:3000/', cedarCreekConfig );
configMapping.set( 'http://ojibwaymoths.marknenadov.com/', ojibwayConfig );
configMapping.set( 'http://cedarcreekmoths.marknenadov.com/', cedarCreekConfig );

export const config = configMapping.get( window.location.href );