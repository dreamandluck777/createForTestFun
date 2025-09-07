export function changeComponents (elem1 : React.ReactElement, elem2  : React.ReactElement, cond : boolean) {
    if(cond) {
        return elem1
    } else {
        return elem2;
    }
}