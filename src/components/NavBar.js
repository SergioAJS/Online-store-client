import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import { logout } from "../http/userAPI";

const NavBar = observer(() => {
  const { user } = useAuth();
  const history = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    user.setRole("");
    // logout();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink
          style={{ color: "white", textDecoration: "none" }}
          to={SHOP_ROUTE}
        >
          GOFELECE
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            {user.role === "ADMIN" ? (
              <Link to={ADMIN_ROUTE}>
                <Button variant={"outline-light"}>Админ панель</Button>
              </Link>
            ) : null}
            <Link to={SHOP_ROUTE}>
              <Button
                variant={"outline-light"}
                onClick={() => logOut()}
                style={{ marginLeft: 8 }}
              >
                Выйти
              </Button>
            </Link>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => history(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
