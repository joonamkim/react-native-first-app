import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  // console.log(props.navigation);
    // this is JSX
    return (
        <View>
          <Text style={styles.text}>Hi there this is an app</Text>
          <Button
              onPress={() => props.navigation.navigate('Components')}
              title="GO to Component's Demo" />
          <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
            <Text>Go to List Demo</Text>
            <Text>Go to List Demo</Text>
            <Text>Go to List Demo</Text>
          </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
