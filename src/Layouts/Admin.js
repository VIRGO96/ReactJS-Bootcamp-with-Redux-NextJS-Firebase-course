import react from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Admin = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  if (!user) {
    navigate("/signin");
  }
  return <div>{children}</div>;
};
export default Admin;
