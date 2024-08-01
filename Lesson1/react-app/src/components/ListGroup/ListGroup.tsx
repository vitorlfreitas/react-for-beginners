/* Changing States of elements */
import { useState } from "react";
import styled from "styled-components";

// We can code all the styles for all the HTML tags
// We use the styled.tagName` attribute: value`;
// It return a React component
const List = styled.ul`
    list-style: none;
    padding: 0;
`;

interface ListItemProps {
    active: boolean;
}

const ListItem = styled.li<ListItemProps>`
    padding: 5px;
    background: ${ props => props.active ? 'blue' : 'none' };
`;

// { items: [], heading: String}
interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No item found</p>}
            <List>
                // As we are using map, the map can returns the element and
                index
                {items.map((item, index) => (
                    // Every child in a list should have a key value
                    <ListItem
                        active = { index === selectedIndex }
                        key={item}
                        onClick={() => {
                            // We can use the index to update the selectedIndex
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}
export default ListGroup;
