import React, { useLayoutEffect } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { StackScreenProps } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { StackParamList } from './Navigation';
import RecipeListItem from '../components/RecipeListItem';
import IoniconsHeaderButton from '../components/IoniconsHeaderButton';

type Props = StackScreenProps<StackParamList, 'RecipeList'>;

interface RecipeData {
    name: string;
    category: string;
}

export default function RecipeList({ navigation }: Props): React.ReactElement {
    const mockData: Array<RecipeData> = [
        { name: 'Recipe 1', category: 'Category 1' },
        { name: 'Recipe 2', category: 'Category 1' },
        { name: 'Recipe 3', category: 'Category 2' },
    ];

    const headerButtons = () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="add" iconName="add-circle-outline" />
            <Item title="search" iconName="search-outline" />
            <Item title="filter" iconName="filter-outline" />
        </HeaderButtons>
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: headerButtons,
        });
    }, [navigation]);

    const onPressRecipeHandler = (name: string) => {
        navigation.navigate('Recipe', { name });
    };

    const populateRecipeList = (data: Array<RecipeData>, category: string) => {
        return data
            .filter((recipe: RecipeData) => recipe.category === category)
            .map((recipe: RecipeData, idx: number) => (
                <RecipeListItem key={idx} name={recipe.name} onPress={() => onPressRecipeHandler(recipe.name)} />
            ));
    };

    return (
        <Container>
            <Content>
                <List>
                    <ListItem itemDivider>
                        <Text>Category 1</Text>
                    </ListItem>
                    {populateRecipeList(mockData, 'Category 1')}

                    <ListItem itemDivider>
                        <Text>Category 2</Text>
                    </ListItem>
                    {populateRecipeList(mockData, 'Category 2')}
                </List>
            </Content>
        </Container>
    );
}
