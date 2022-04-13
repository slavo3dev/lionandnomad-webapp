import React from "react";
import { Header } from "../Header";
interface Props {
    children: any;
    className: string;
}

export const BaseLayout: React.FC<Props> = (props) => {
    const { className, children } = props;

    console.log("Props: ", className);
    return (
        <div className="layout-container">
            <Header />
            <main className={`cover ${className}`}>
                <div className="wrapper">{children}</div>
            </main>
        </div>
    );
};
