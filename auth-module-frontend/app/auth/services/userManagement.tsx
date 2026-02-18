import {createContext} from "react";
import * as process from "node:process";


const headers = new Headers({
    "Content-Type": "application/json",
    "App-Token":import.meta.env.VITE_APP_TOKEN ?? "app-token",
});

export async function register(formData:FormData){
    const data = Object.fromEntries(formData.entries());
    const request = await fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: headers,
        body:JSON.stringify(data)
    })

    try {
        const response = await request.json();
        return response;
    }catch(err){
        console.log(err);
    }
}

export async function login(formData:FormData){
    const data = Object.fromEntries(formData.entries());
    const request = await fetch("http://localhost:3001/user/login", {
        method: "POST",
        headers: headers,
        body:JSON.stringify(data)
    })

    try {
        console.log("request ---- ",request);
        const response = await request.json();
        return response;
    }catch(err){
        console.log(err);
    }
}

export async function getUserInfo(){
    const accessToken = localStorage.getItem("accessToken")!;
    headers.set("Authorization", "Bearer "+accessToken);
    const request = await fetch("http://localhost:3001/user/getInfo", {
        method: "GET",
        headers: headers,
    })

    try {
        return await request.json();
    }catch(err){
        console.log(err);
    }
}

export function logout(){
    localStorage.removeItem("accessToken");
}


