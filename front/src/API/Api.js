import { createAsyncThunk } from "@reduxjs/toolkit";
//import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slice";

//import { setUser } from "../redux/slice";

export const fetchUserProfile = createAsyncThunk("fetch", async (token) => {
  const dispatch = useDispatch();
  // const [userdata, setUserData] = useState("");
  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Erreur lors de la requête");
    }
    const UserData = await response.json();
    console.log("body :", UserData.body);
    dispatch(setUser(UserData.body));
    return UserData;
    // demande à Redux d'utiliser l'action "setUser" pour mettre à jour l'état global.
  } catch (error) {
    console.error("Erreur:", error);
  }
});
