import React from 'react';
import {
    DropContainer,
    DropInner,
    DropItem,
    DropRow,
} from '../../style/DropdownStyle';
import menuItem from '../../util/menuItem.json';

const Dropdown = ({ setToggle }) => {
    return (
        <>
            <DropContainer>
                <DropInner>
                    <DropRow>
                        {menuItem.map((menu) => {
                            return <DropItem>{menu.category}</DropItem>;
                        })}
                    </DropRow>
                </DropInner>
            </DropContainer>
        </>
    );
};

export default Dropdown;
