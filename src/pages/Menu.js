import React from "react";
import { MenuList, Breakfast, Lunch, Dinner, Drink } from "../Data/Data";
import { Tab, Nav, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Menu = () => {
  const itemsPerRow = 3;
  const rows = Math.ceil(MenuList.length / itemsPerRow);

  const renderMenuItem = (menu) => (
    <Col key={menu.name} xs={12} sm={6} md={4} style={{ marginBottom: "20px" }}>
      <Card style={{ borderRadius: "15px", overflow: "hidden" }}>
        <div style={{ height: "300px", overflow: "hidden" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={menu.image}
            alt={menu.name}
          />
        </div>
        <Card.Body>
          <Card.Title>{menu.name}</Card.Title>
          <Card.Text>{menu.description}</Card.Text>
          <Card.Text>Rs {menu.price}</Card.Text>
          <Link to="/order">
            <Button variant="primary">Order now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );

  const renderMenuCategory = (menuItems) => (
    <Row style={{ marginTop: "30" }}>
      {menuItems.map((menu) => renderMenuItem(menu))}
    </Row>
  );

  return (
    <Layout>
      <div>
        <section style={{ padding: "40px" }}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Over Menu
          </h1>
          <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav
              variant="pills"
              justify
              style={{ marginBottom: "50px", borderRadius: "15px" }}
            >
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link eventKey="first" style={{ borderRadius: "15px" }}>
                  All Categories
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link eventKey="second" style={{ borderRadius: "15px" }}>
                  Breakfast
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link eventKey="third" style={{ borderRadius: "15px" }}>
                  Lunch
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link eventKey="fourth" style={{ borderRadius: "15px" }}>
                  Dinner
                </Nav.Link>
              </Nav.Item>
              <Nav.Item style={{ flex: 1 }}>
                <Nav.Link eventKey="fifth" style={{ borderRadius: "15px" }}>
                  Drinks
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                {[...Array(rows)].map((_, rowIndex) => (
                  <div key={rowIndex}>
                    {renderMenuCategory(
                      MenuList.slice(
                        rowIndex * itemsPerRow,
                        (rowIndex + 1) * itemsPerRow
                      )
                    )}
                  </div>
                ))}
              </Tab.Pane>

              <Tab.Pane eventKey="second">
                {[...Array(rows)].map((_, rowIndex) => (
                  <div key={rowIndex}>
                    {renderMenuCategory(
                      Breakfast.slice(
                        rowIndex * itemsPerRow,
                        (rowIndex + 1) * itemsPerRow
                      )
                    )}
                  </div>
                ))}
              </Tab.Pane>

              <Tab.Pane eventKey="third">
                {[...Array(rows)].map((_, rowIndex) => (
                  <div key={rowIndex}>
                    {renderMenuCategory(
                      Lunch.slice(
                        rowIndex * itemsPerRow,
                        (rowIndex + 1) * itemsPerRow
                      )
                    )}
                  </div>
                ))}
              </Tab.Pane>

              <Tab.Pane eventKey="fourth">
                {[...Array(rows)].map((_, rowIndex) => (
                  <div key={rowIndex}>
                    {renderMenuCategory(
                      Dinner.slice(
                        rowIndex * itemsPerRow,
                        (rowIndex + 1) * itemsPerRow
                      )
                    )}
                  </div>
                ))}
              </Tab.Pane>

              <Tab.Pane eventKey="fifth">
                {[...Array(rows)].map((_, rowIndex) => (
                  <div key={rowIndex}>
                    {renderMenuCategory(
                      Drink.slice(
                        rowIndex * itemsPerRow,
                        (rowIndex + 1) * itemsPerRow
                      )
                    )}
                  </div>
                ))}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </section>
      </div>
    </Layout>
  );
};

export default Menu;
