interface ForButton {
    text : string;
    func: () => void;
}
export function Button ({text,func} : ForButton) {
    return <button onClick={func}>{text}</button>
}

