import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Form,
  Input,
  Label,
} from "reactstrap";
import { addJobs } from "../Store/job/jobAction";
import { useDispatch } from "react-redux";
function AddJob({ modal, toggle, ...args }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addJobs({ title, location }));
            setTitle("");
            setLocation("");
            toggle();
          }}
        >
          <ModalHeader toggle={toggle}>Post a Job</ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Title</label>
              <Input
                required
                placeholder="Enter Title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label>Location</label>
              <Input
                required
                placeholder="Enter Location"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>
              Cancel
            </Button>{" "}
            <Button color="primary" type="submit">
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
}

export default AddJob;
