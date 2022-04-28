import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuthLocal = () => {
  return useContext(AuthContext);
};

export default useAuthLocal;
