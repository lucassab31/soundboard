import React from "react";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { FlatList} from "react-native";
import { Audio } from "expo-av"
import { Button, TouchableOpacity, View } from 'react-native';

const Home = () => {
    const [sound, setSound] = useState();
    const samples = useSelector((state) => state.padSamples);
    
    const navigation = useNavigation();

    async function playSound(sample) {
        const { sound } = await Audio.Sound.createAsync(sample.file);
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync(); }
            : undefined;
    }, [sound]);

    const SampleComponent = ({ item }) => (
        <View style={{margin:"2%"}}>
            <View >
                <TouchableOpacity
                    onPress={() => playSound(item)}
                    onLongPress={() =>
                        navigation.navigate("Settings", {
                            sampleID: item.id,
                        })
                    }
                    style={{height: 100, width: 100, backgroundColor:"#ff9000", borderRadius:5}}
                    />
            </View>
        </View>
    );

    return (
        <View style={{margin:10}}>
            <Button
                title="Download a sound"
                onPress={() => navigation.navigate('FreeSound')}
            />
            <FlatList
                data={samples}
                renderItem={SampleComponent}
            />
        </View>
    );
};

export default Home;
