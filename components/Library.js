import React from "react";
import { useEffect, useState } from "react";
import { Button, Text, View, FlatList } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { editSample } from "./PadSlice";
import { Audio } from "expo-av";

const Library = (props) => {
    const samples = useSelector((state) => state.library);
    const padSamples = useSelector((state) => state.padSamples);
    const { sampleID } = props.route.params;
    const dispatch = useDispatch();

    const changeSample = (item) => {
        dispatch(editSample({
            idSampleToReplace: sampleID,
            newSample: item
        }));
    }

    const [sound, setSound] = useState();
    const playSample = async (item) => {
        const { sound } = await Audio.Sound.createAsync({ uri: item.file });
        setSound(sound);
        await sound.playAsync();
    }
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    const sample = ({ item }) => (
        <View style={{ marginBottom: 20, fontWeight: "bold" }}>
            <Text style={{ fontWeight: "bold" }}>{item.sample}</Text>
            <Text>From : {item.category}</Text>
            <Button color="#ff9000" title="Play" onPress={() => playSample(item)} />
            <Button color="#ff6000" title="Change it" onPress={() => changeSample(item)} />
        </View>
    );

    return (
        <View>
            <FlatList
                data={samples}
                renderItem={sample}
                style={{ margin: 10 }}
            />
        </View>
    );
};


export default Library;
