import React from "react";
import { Header } from "../Header";
interface Props {
    children: any;
}

export const BaseLayout: React.FC<Props> = (props) => {
    return (
        <>
            (
            <Header />
            {props.children})
        </>
    );
};
