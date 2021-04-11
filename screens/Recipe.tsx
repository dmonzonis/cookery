import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { StackParamList } from './Navigation';
import IoniconsHeaderButton from '../components/IoniconsHeaderButton';

type Props = StackScreenProps<StackParamList, 'Recipe'>;

export default function Recipe({ route, navigation }: Props): React.ReactElement {
    const { name } = route.params;

    const headerButtons = () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="edit" iconName="pencil-outline" />
            <Item title="delete" iconName="trash-outline" />
        </HeaderButtons>
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: headerButtons,
        });
    }, [navigation]);

    return (
        <View style={styles.rootView}>
            <Text>This is a recipe for {name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
