import React from 'react';
import { SelectionTab } from './SelectionTab';

interface SelectionTabsProps {
    itemList: string[];
    currentItemName: string;
    setCurrentItem: ( value: string ) => void;
}

export const SelectionTabs = ( props: SelectionTabsProps ) => {
    const { itemList, currentItemName, setCurrentItem } = props;

    return (
        <div className={"flex flex-col lg:flex-row lg:flex-wrap"}>
            {
                itemList.map( ( itemNameFromList ) => (
                    <SelectionTab
                        key={ itemNameFromList }
                        setCurrentItem={ setCurrentItem }
                        currentItemName={ currentItemName }
                        itemName={ itemNameFromList }
                    />
                ) )
            }
        </div>
    );
};
