import { ReactNode } from "react";

type PropsType = {
    heading: string;
    count?: number;
    children: ReactNode;
};

const Box = ({ heading, count = 5, children }: PropsType) => {
    // func1("Hare Krishna!", "Hare Rama!");
    return (
        <div>
            <h1>{heading}</h1>
            {
                count && <p>{count}</p>
            }
            {children}
        </div>
    );
}

export default Box;