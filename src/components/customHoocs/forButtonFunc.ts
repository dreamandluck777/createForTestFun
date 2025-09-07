import { useState } from "react";

export function useClick () {
    const [show, changeShow] = useState<boolean>(false);
    function changeVision () {
        if(!show) {
            changeShow(true);
        }
    }
    return {changeVision, show};
}