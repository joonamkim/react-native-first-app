import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const INCREMENT = 1;

const reducer = (state, action) => {

    switch (action.type) {
        case 'increment_counter':
            return {...state, counter: state.counter + action.payload};
        case 'decrement_counter':
            return {...state, counter: state.counter + action.payload};
        default:
            return state;

    }
};

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    //dispatch -- callMyReducer
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;

    console.log(state);

    return (
        <View>
            <Button title="Increase " onPress={() => dispatch({type:'increment_counter', payload: INCREMENT})
            // {
            //     //can't modify state variable directly
            //     setCounter(counter + 1);
            // }
            }/>
            <Button title="Decrease " onPress={()=> dispatch({type:'decrement_counter', payload: -1 * INCREMENT})
            // {
            //     setCounter(counter - 1);
            // }
            }/>
            <Text style={styles.textStyle}> Current Count: {state.counter} </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default CounterScreen;
