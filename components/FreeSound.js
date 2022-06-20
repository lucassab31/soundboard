import React from "react";
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {addSampleToList} from "./librarySlice";
import { Audio } from "expo-av"
import {View, TextInput, FlatList, Button, Text} from "react-native";

const FreeSound = () => {
    const [input, setInput] = useState("");
    const [listResults, setListResults] = useState([]);
    const dispatch = useDispatch();

    const add = (item) => {
        dispatch(addSampleToList({
            id: item.id,
            sample: item.sample,
            category: "freesound",
            file: item.url
        }));
    }

    const [sound, setSound] = useState();
    const playSample = async (item) => {
        const { sound } = await Audio.Sound.createAsync({uri:item.url});
        setSound(sound);
        await sound.playAsync();
    }
    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync(); }
            : undefined;
    }, [sound]);

    const search = async () => {
        let freeSoundKey = "VKhMCaaytYRIAuszPtkoB1AJoYbPLUUSrJUd8B3p";
        const response = await fetch(`https://freesound.org/apiv2/search/text/?query=${input}&fields=id,name,url,previews,download&token=${freeSoundKey}`);
        const json = await response.json();
        setListResults(json.results.filter((item) => item.id && item.name).map(sampleStructure));
    }
    const sampleStructure = (sample) => {
        return {
            id: sample.id,
            sample: sample.name,
            category: "freeSound",
            url: sample.previews["preview-hq-mp3"],
        };
    };

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                value={input}
                style={{margin:10}}
                onChangeText={setInput}
                placeholder="Search sounds"/>
            <Button
                title="Search"
                onPress={search}
            />

            <View style={{margin:"3%"}}>
                <FlatList
                    data={listResults}
                    renderItem={({ item }) => (
                        <View style={{marginBottom:20}}>
                            <Text style={{marginBottom:10, fontWeight:"bold"}}>{item.sample}</Text>
                            <Button color="#ff9000" title="Play"  onPress={() => playSample(item)} />
                            <Button color="#ff6000" title="Add it to the library" onPress={() => add(item)} />
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </View>
    );
};


export default FreeSound;
