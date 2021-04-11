import React from 'react';
import { ListItem, Text } from 'native-base';

export default function RecipeListItem({ name, onPress }): React.ReactElement {
    return (
        <ListItem button onPress={onPress}>
            <Text>{name}</Text>
        </ListItem>
    );
}
