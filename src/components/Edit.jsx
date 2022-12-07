import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Employess from "./Employees";
import { v4 as uuid } from "uuid";
import { useNavigate, Link } from "react-router-dom";

function Edit() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      Edit
    </div>
  );
}

export default Edit;
