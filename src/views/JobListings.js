import react, { useEffect } from "react";
import { useState } from "react";
import { Button, Input, Table, FormGroup } from "reactstrap";
import AddJob from "../components/AddJob";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../Store/job/jobAction";
import { signOutUser } from "../Store/auth/authAction";
import useDebounce from "../hooks/useDebounce";
const JobListings = () => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 500);
  const dispatch = useDispatch();
  const { jobs } = useSelector((state) => state.jobs);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    dispatch(getJobs(debouncedValue));
  }, [debouncedValue, dispatch]);
  return (
    <div className="p-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="py-3">Job Listings</h3>
        <Button color="danger" onClick={() => dispatch(signOutUser())}>
          {" "}
          Logout
        </Button>
      </div>

      <div className="d-flex justify-content-end">
        <Button color="primary" onClick={toggle}>
          Add Job
        </Button>
      </div>
      <FormGroup className="py-2 ">
        <Input
          type="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </FormGroup>
      <Table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.id}</td>
              <td>{job.title}</td>
              <td>{job.location}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <AddJob modal={modal} toggle={toggle} />
    </div>
  );
};

export default JobListings;
