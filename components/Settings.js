import { Button, View, Text } from 'react-native';
import {useNavigation} from "@react-navigation/native";

const Settings = (props) => {
    const navigation = useNavigation();
    const {sampleID} = props.route.params;

    return (
        <View>
            <View style={{margin:10}}>
                <Button
                    title="Replace the sound"
                    onPress={() => navigation.navigate('Library', {sampleID: sampleID,})}
                />
                <Button
                    title="Edit the sound"
                />

            </View>
        </View>
    );
};


export default Settings;
