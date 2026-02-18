import {type RouteConfig, index, route, prefix} from "@react-router/dev/routes";


export default [
    index("routes/home.tsx"),

    route("auth","./auth/auth.tsx",[
        route("sign-in","./auth/sign-in/sign-in.tsx"),
        route("sign-up","./auth/sign-up/sign-up.tsx")
    ]),

    // ...prefix("auth",[
    //     route("sign-in","./auth/sign-in/sign-in.tsx"),
    //     route("sign-up","./auth/sign-up/sign-up.tsx")
    // ]),

    route("welcome","./welcome/welcome.tsx")

] satisfies RouteConfig;
