import {createSlice} from "@reduxjs/toolkit";

const librarySlice = createSlice({
    name:"samples",
    initialState: [
        { id: 0, sample: 'clap 1', category:"local", file: require("../assets/samples/clap_1.wav")},
        { id: 1, sample: 'clap 2', category:"local", file:require("../assets/samples/clap_2.wav")},
        { id: 2, sample: 'snare 1', category:"local", file:require("../assets/samples/snare_1.wav")},
        { id: 3, sample: 'snare 2', category:"local", file:require("../assets/samples/snare_2.wav")},
        { id: 4, sample: 'tom 1', category:"local", file:require("../assets/samples/tom_1.wav")},
        { id: 5, sample: 'tom 2', category:"local", file:require("../assets/samples/tom_2.wav")},
        { id: 6, sample: 'shaker 1', category:"local", file:require("../assets/samples/shaker_1.wav")},
        { id: 7, sample: 'shaker 2', category:"local", file:require("../assets/samples/shaker_2.wav")},
        { id: 8, sample: 'shaker 3', category:"local", file:require("../assets/samples/shaker_3.wav")},
        { id: 9, sample: 'kick 1', category:"local", file:require("../assets/samples/kick_1.wav")},
        { id: 10, sample: 'kick 2', category:"local", file:require("../assets/samples/kick_2.wav")},
    ],
    reducers : {
        addSampleToList: (state, action) => {
            let get_sample = state.map((elm) => elm.id).includes(action.payload.id);
            if (get_sample == true) {
                return state;
            }
            else {
                return [ ...state,action.payload];
            }
        },
        },
});

export const {addSampleToList} = librarySlice.actions;
export default librarySlice.reducer;
export const librarySliceSelector = (state) => state.samples;
