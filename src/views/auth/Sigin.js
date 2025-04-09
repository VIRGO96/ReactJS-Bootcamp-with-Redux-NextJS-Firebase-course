import react from "react";
import { useState } from "react";
import { Card, FormGroup, Label, Form, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { signin } from "../../Store/auth/authAction";
import { useDispatch } from "react-redux";
const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="p-4">
      <Card className="p-4">
        <h1 className="text-center text-primary ">Signin</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(signin({ email, password }));
            setEmail("");
            setPassword("");
          }}
        >
          <FormGroup>
            <Label>Email</Label>
            <Input
              required
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              required
              type="text"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <div className="d-flex justify-content-center align-items-center">
            <Button color="primary" type="submit">
              Signin
            </Button>
          </div>
        </Form>
        <p className="text-center pt-3">
          Already have an account? <Link to="/signup">Signup</Link>
        </p>
      </Card>
    </div>
  );
};

export default Signin;
