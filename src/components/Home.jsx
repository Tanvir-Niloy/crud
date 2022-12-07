import React from "react";
import { Button, Table } from "react-bootstrap";
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    navigate("/");
  };

  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.name}</td>
                      <td>{item.age}</td>
                      <td>
                        <Link to={"/edit"}>
                          <Button
                            className="mx-2"
                            variant="primary"
                            onClick={() => alert(item.id)}
                          >
                            EDIT
                          </Button>
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => handleDelete(item.id)}
                        >
                          DELETE
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data Available"}
          </tbody>
        </Table>
        <br />
        <br />
        <Link to={"/create"} className='d-grid gap-2'>
          <Button
            size="lg"
            variant="primary"
          >
            CREATE
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
