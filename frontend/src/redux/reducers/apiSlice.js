import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    name: "",
    email: "",
    token: "",
    passtoken: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        setRegister: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        setLogout: () => initialState,
        setPass: (state, action) => {
            state.passtoken = action.payload.passtoken;
        },
    },
});

export const { setLogin, setRegister, setLogout, setPass } = authSlice.actions;
export default authSlice.reducer;