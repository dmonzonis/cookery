import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipeList from './RecipeList';
import Recipe from './Recipe';
import i18n from '../i18n/i18n';

type StackParamList = {
    RecipeList: undefined;
    Recipe: { name: string };
};

const Stack = createStackNavigator<StackParamList>();

export default function Navigation(): React.ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RecipeList">
                <Stack.Screen name="RecipeList" component={RecipeList} options={{ title: i18n.t('Recipes') }} />
                <Stack.Screen name="Recipe" component={Recipe} options={{ title: '' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { StackParamList };
