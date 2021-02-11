import React from 'react';

interface SelectionTabProps {
    itemName: string;
    setCurrentItem: ( value: string ) => void;
    currentItemName: string;
}

export const SelectionTab = ( props: SelectionTabProps ) => {
    const { itemName, setCurrentItem, currentItemName } = props;

    const itemNameStripped = itemName.split( ' [' )[0];
    const isSelected = itemNameStripped === currentItemName;

    const tabClasses = 'text-lg border-solid border-black border w-full lg:w-max float-left cursor-pointer m-1 px-4 py-2 hover:bg-green-100';

    return (
        <div
            key={ `${itemNameStripped}tab` }
            className={ isSelected ? `${tabClasses} bg-green-400`: tabClasses }
            onClick={ () => setCurrentItem( itemNameStripped ) }
        >
            { itemName }
        </div>
    );
};