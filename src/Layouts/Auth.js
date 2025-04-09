import react from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Auth = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  if (user?.id) {
    navigate("/");
  }
  return <div>{children}</div>;
};
export default Auth;
