import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BackButton from '../../common/BackButton';
import useRootNavigation from '../../navigation/hooks/useRootNavigation';
import { RootScreenTypes } from '../../../types/navigation';
import { mainTheme } from '../../../themes/mainTheme';

export type HeaderProps = {
    backTab: RootScreenTypes;
}

const Header = ({ backTab }: HeaderProps) => {
    const navigation = useRootNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.backButtonContainer}>
                <BackButton 
                    extraProps={{
                        paddingLeft: 35,
                        marginLeft: 10,
                    }}
                    onPress={() => navigation.navigate(backTab) } 
                    color={mainTheme.WHITE_COLOR}
                />
            </View>
            
            <View style={styles.sendTextContainer}>
                <Text style={styles.sendText}>Send</Text>
            </View>
        </View>
    )

}

export default Header;

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 40,
      paddingHorizontal: 20,
      borderRadius: 12,
    },
    backButtonContainer: {
        flexDirection: "row",
        flex: 0.3,
    },
    sendTextContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 5.7,
    },
    sendText: {
        color: mainTheme.BLACK_COLOR,
        textAlign: 'center', 
        fontSize: 24, 
        fontWeight: '700', 
        fontFamily: 'Helvetica Neue',
        marginLeft: -20,
    }
});