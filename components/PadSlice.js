import {createSlice} from "@reduxjs/toolkit";

const PadSlice = createSlice({
    name:"padSample",
    initialState: [
        { id: 0, sample: 'clap 1', category:"local", file: require("../assets/samples/clap_1.wav")},
        { id: 1, sample: 'snare 1', category:"local", file:require("../assets/samples/snare_1.wav")},
        { id: 2, sample: 'tom 1', category:"local", file:require("../assets/samples/tom_1.wav")},
        { id: 3, sample: 'shaker 1', category:"local", file:require("../assets/samples/shaker_1.wav")},
    ],
    reducers : {
        editSample: (state, action) => {
            return state.map(
                item =>
                    item.id === action.payload.idSampleToReplace
                        ?  { ...item, ...action.payload.newSample }
                        : item
            )
        },
    }
});

export const {editSample} = PadSlice.actions;
export default PadSlice.reducer;
export const padSampleSelector= (state) => state.padSample;
