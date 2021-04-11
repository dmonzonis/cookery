import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';

type Props = {
    title: string;
    iconName: string | undefined;
    onPress: () => unknown | undefined;
};

export default function IoniconsHeaderButton(props: Props): React.ReactElement {
    return <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />;
}
