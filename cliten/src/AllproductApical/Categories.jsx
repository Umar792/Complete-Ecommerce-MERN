import React from "react";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

const Categories = () => {
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen className="mx-3">
      <div className="category">
        <h2>Categories</h2>
      </div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Men Dressing</Accordion.Header>
        <Accordion.Body>
          <ul>
            <NavLink to="/boski">
              <li>BOSKI</li>{" "}
            </NavLink>
            <NavLink to="/wash&wear">
              <li>WASH & WEAR</li>{" "}
            </NavLink>
            <NavLink to="/kurta">
              <li>KURTA</li>{" "}
            </NavLink>
            <NavLink to="/menshawl">
              <li>MEN SHAWL</li>{" "}
            </NavLink>
            <NavLink to="/cotton">
              <li>COTTON</li>{" "}
            </NavLink>
            <NavLink to="/karandi">
              <li>KARANDI</li>{" "}
            </NavLink>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Women Dressing</Accordion.Header>
        <Accordion.Body>
        <ul>
            <NavLink to="/boski">
              <li>BOSKI</li>
            </NavLink>
            <NavLink to="/wash&wear">
              <li>WASH & WEAR</li>
            </NavLink>
            <NavLink to="/kurta">
              <li>KURTA</li>
            </NavLink>
            <NavLink to="/menshawl">
              <li>MEN SHAWL</li>
            </NavLink>
            <NavLink to="/cotton">
              <li>COTTON</li>
            </NavLink>
            <NavLink to="/karandi">
              <li>KARANDI</li>
            </NavLink>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Categories;
