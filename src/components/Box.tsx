type PropsType = {
    heading: string;
    count: number;
    func1: (b: string, a: string) => void;
};

const Box = ({ heading, count, func1 }: PropsType) => {

    func1("Hare Krishna!", "Hare Rama!");

    return (
        <div>
            <h1>{ heading }</h1>
            <p>{count}</p>
        </div>
    )
}

export default Box;