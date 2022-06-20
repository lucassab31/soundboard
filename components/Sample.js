import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const Sample = ({ id, url, name, type }) => {
    return (
        <View style={styles.sample}>
            <Text style={{fontWeight: 'bold', fontSize: 25, color: '#fff' }}>{name}</Text>
            <Text style={{fontSize: 15, color: '#fff' }}>{type}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sample: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        backgroundColor: '#ff9000',
    },
  });

export default Sample;
