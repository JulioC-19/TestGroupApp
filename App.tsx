import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const pizzaTranslador = () => {
    const [text, setText] = useState('');

    return (
        <View style={{ padding: 10 }}>
            <TextInput
                style={{ height: 40 }}
                placeholder="Type sutff"
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
        </View>
    );
};

export default pizzaTranslador;
