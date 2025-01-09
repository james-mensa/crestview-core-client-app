import { useLocation } from "react-router-dom";

export const useRouteState = () => {
  const location = useLocation();
  return location.state || {};
 
};