import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

// const HomeScreen = (props) => {
const HomeScreen = ({navigation}) => {
    // console.log(props.navigation);
    // this is JSX
    return (
        <View>
            <Text style={styles.text}>Hi there this is an app</Text>
            <Button
                onPress={() => navigation.navigate('Components')}
                title="GO to Component's Demo"/>
            <Button onPress={() => navigation.navigate('List')}
                    title="Go to List Demo"/>
            <Button onPress={() => navigation.navigate('Counter')}
                    title="Go to Counter"/>
            <Button onPress={() => navigation.navigate('Image')}
                    title="ImageScreen"/>
            <Button onPress={() => navigation.navigate('Color')}
                    title="ColorScreen"/>
            <Button onPress={() => navigation.navigate('Square')}
                    title="SquareScreen"/>

        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
