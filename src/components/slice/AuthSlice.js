// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie
import LoginApis from "../Services/LogInServices";

// Async Thunk for login API
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }, id) => {
        console.log("Credentials being sent:", credentials?.id); // Debugging line

        try {
            const response = await LoginApis.LoginUser(credentials);
            const userData = response.data;
            console.log(userData?.user?.id, "user data")
            // Save token and user data in cookies
            Cookies.set("authToken", userData.token, { expires: 7 }); // Set token cookie with a 7-day expiry
            Cookies.set("role", userData?.user?.roles?.[0]?.name, { expires: 7 });
            console.log(userData?.user?.roles?.[0]?.name, "user")
            Cookies.set("userId", userData?.user?.id, {
                // secure: true,  // Transmitted only over HTTPS
                // httpOnly: true, // Not accessible via JavaScript
                // sameSite: "Strict", // Prevent cross-site requests
                expires: 7,  // Set an expiration date
            });
            Cookies.set("isAuthenticated", "true", { expires: 7 }); // Authentication status

            return userData;
        } catch (error) {
            return rejectWithValue(error.response.data || "Login failed.");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {
        logoutUser: (state) => {
            // Clear cookies on logout
            console.log(Cookies.get("isAuthenticated"))
            Cookies.remove("authToken");
            Cookies.remove("userId");
            Cookies.remove("isAuthenticated");

            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isAuthenticated = true;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Login failed.";
            });
    },
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;
