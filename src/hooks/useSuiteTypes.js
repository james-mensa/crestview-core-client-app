import { useEffect, useState } from "react";
import { suitTypeApis } from "../apis/suite/suiteTypeApi";

export const useSuiteState=()=>{
    const [suiteList,setList]=useState([])
    useEffect(() => {
const request=async()=>{
    const response=await suitTypeApis.getSuiteTypes()
    if(response.data){
     setList(response.data)
        console.log({response})
    }
}
 request();
    }, []);

    return {
        suiteList,setList
    }
}