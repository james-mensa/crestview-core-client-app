import { useEffect } from "react";

export const useCloseModel=(ref,close,listener)=>{
    const handleClickOutside = (event) => {
        if (ref.current &&!ref.current.contains(event.target)) {
            close();
        }
    };
    useEffect(() => {
        document.addEventListener(listener, handleClickOutside);
        return () => {
            document.removeEventListener(listener, handleClickOutside);
        };
    }, []);

}