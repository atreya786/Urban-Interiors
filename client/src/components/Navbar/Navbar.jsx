import { Navbar, Button, Text, Avatar } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Input, Row, Checkbox, Textarea } from "@nextui-org/react";
import image from "./logo.png";
import SearchContext from "../../context/SearchContext";

const SearchIcon = ({ size, fill, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </svg>
  );
};

const NewNavbar = () => {
  const { login, token } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(email, password);
    window.location.reload();
  };

  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [newemail, setNewEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    await fetch("https://urban-interiors-server.vercel.app/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        newemail,
        newpassword,
        phone,
        address,
      }),
    });
    alert("Registered Successfully");
    setUsername("");
    setNewEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setAddress("");
    setPhone("");
    closeModal();
  };

  const navigate = useNavigate();
  const handleProfile = () => {
    navigate("/Profile");
  };

  const { search, updateSearch } = useContext(SearchContext);

  const active = window.location.pathname;

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Link to="/">
            <img
              src={image}
              style={{ height: "3rem", width: "15rem" }}
              alt=""
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link isActive={active === "/" ? true : false} href="/">
            Home
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/Categories" ? true : false}
            href="Categories"
          >
            Categories
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/About" ? true : false}
            href="/About"
          >
            About Us
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/Contact" ? true : false}
            href="/Contact"
          >
            Contact Us
          </Navbar.Link>
          <Navbar.Link isActive={active === "/Cart" ? true : false} href="Cart">
            Cart
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <>
              {token ? (
                <>
                  <Input
                    clearable
                    contentLeft={
                      <SearchIcon
                        fill="var(--nextui-colors-accents6)"
                        size={16}
                      />
                    }
                    contentLeftStyling={false}
                    css={{
                      w: "100%",
                      "@xsMax": {
                        mw: "300px",
                      },
                      "& .nextui-input-content--left": {
                        h: "100%",
                        ml: "$4",
                        dflex: "center",
                      },
                    }}
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => {
                      updateSearch(e.target.value);
                    }}
                  />
                  <span onClick={handleProfile}>
                    <Avatar
                      className="mx-2"
                      bordered
                      as="button"
                      color="secondary"
                      size="lg"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </span>
                </>
              ) : (
                <>
                  <Button auto flat onPress={handler}>
                    Login
                  </Button>
                  <Button auto className="mx-1" onPress={openModal}>
                    Sign Up
                  </Button>
                </>
              )}
            </>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              <span> </span>URBAN INTERIORS
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            name="email"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            id="password"
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14} className="my-1">
                Remember me
              </Text>
            </Checkbox>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Close
          </Button>
          <Button auto onPress={handleLogin}>
            Sign in
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        open={isOpen}
        onClose={closeModal}
        closeButton
        blur
        aria-labelledby="modal-title"
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              <span> </span>URBAN INTERIORS
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            id="username"
            required
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
            value={newemail}
            onChange={(e) => setNewEmail(e.target.value)}
            id="newemail"
            name="email"
            required
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Password"
            value={newpassword}
            onChange={(e) => setNewPassword(e.target.value)}
            name="password"
            id="newpassword"
            required
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            name="password"
            id="confpassword"
            required
          />
          <Textarea
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            name="address"
            id="address"
            required
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            name="phone"
            id="phone"
            required
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeModal}>
            Close
          </Button>
          <Button auto onPress={handleSubmit}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default NewNavbar;
