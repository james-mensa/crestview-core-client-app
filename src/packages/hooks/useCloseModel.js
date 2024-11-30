import { useEffect } from "react";

export const useCloseModel=(ref,close)=>{
    const handleClickOutside = (event) => {
        if (ref.current &&!ref.current.contains(event.target)) {
            close();
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, close]);

}