// @ts-ignore
import type { Route } from "./+types/home";
import { useNavigate } from "react-router";
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}



export default function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("accessToken")? navigate(`/welcome`) : navigate("/auth/sign-in") ;
  },[]);

  return (
    <div>
    </div>
  );
}
