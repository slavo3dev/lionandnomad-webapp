import React from "react";
import { Header } from "../Header";
interface Props {
    children: any;
    className: string;
}

export const BaseLayout: React.FC<Props> = (props) => {
    const { className, children } = props;

    return (
        <div className="layout-container">
            <main className={`cover ${className}`}>
                <Header />
                <div className="wrapper">{children}</div>
            </main>
        </div>
    );
};
