import {combineReducers} from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import librarySampleReducer from "./components/librarySlice";
import padSampleReducer from "./components/PadSlice"
// import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import AsyncStorage from "@react-native-async-storage/async-storage";

const reducers = combineReducers(
    {
        library: librarySampleReducer,
        padSamples :padSampleReducer,
    }
);

const persistConfig = {
    key: "root",
    storage : AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig,
    reducers);

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});
