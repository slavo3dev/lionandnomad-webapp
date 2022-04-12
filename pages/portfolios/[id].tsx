import React from "react";
import axios from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";

const portfolio: NextPage = ({ portfolio }: any) => {
    return (
        <>
            <h1>I am Portfolio Page</h1>
            <h1>{portfolio.title}</h1>
            <p>BODY: {portfolio.body}</p>
            <p>ID: {portfolio.id}</p>
        </>
    );
};

portfolio.getInitialProps = async ({ query }) => {
    let post = {};

    try {
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${query.id}`
        );
        post = res.data;
    } catch (e) {
        console.error(e);
    }

    return { portfolio: post };
};

export default portfolio;