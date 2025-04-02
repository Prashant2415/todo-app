import { useState } from "react"

export const useToggle=({value})=>{
    const [toggle, setToggle] = useState(value || false);

    const isToggleOpen =()=>{
        setToggle(true);
    }
    const isToggleClose =()=>{
        setToggle(false);
    }
    return {toggle, isToggleOpen, isToggleClose};
}