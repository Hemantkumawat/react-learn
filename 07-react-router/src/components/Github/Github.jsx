import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
    const data = useLoaderData();
    /* const [data, setData] = useState({})
    useEffect(() => {

    }, []) */
    return (<div className="text-white m-4 bg-gray-500 p-4 text-3xl">
        My Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" />
    </div>);
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hemantkumawat')
    return response.json();
}