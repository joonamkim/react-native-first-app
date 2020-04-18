import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase " onPress={() => {
                //can't modify state variable directly
                setCounter(counter + 1);
            }}/>
            <Button title="Decrease " onPress={()=> {
                setCounter(counter - 1);
            }}/>
            <Text style={styles.textStyle}> Current Count: {counter} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default CounterScreen;
