import { Navbar, Button, Text } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Modal, Input, Row, Checkbox, Textarea } from "@nextui-org/react";
import image from "./logo.png";

const NewNavbar = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, logout } = useContext(AuthContext);
  // console.log(token);

  const handleLogin = async () => {
    await login(email, password);
    window.location.reload();
  };
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    // console.log("closed");
  };

  const handleLogout = () => {
    logout();
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
    // Perform form validation and submit logic here
    const response = await fetch("http://localhost:5000/api/signup", {
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
    const json = await response.json();
    console.log(json);

    // Reset form fields
    setUsername("");
    setNewEmail("");
    setNewPassword("");
    setConfirmPassword("");
    setAddress("");
    setPhone("");

    // Close the modal
    closeModal();
  };

  const active = window.location.pathname;

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Link to="/">
          <img src={image} style={{height:"3rem", width:"15rem"}} alt="" />
          </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link
            isActive={active === "/Products" ? true : false}
            href="Products"
          >
            Products
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/About" ? true : false}
            href="About"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/Contact" ? true : false}
            href="Contact"
          >
            Contact
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/company" ? true : false}
            href="company"
          >
            Cart
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <>
              {token ? (
                <Button auto onPress={handleLogout}>
                  Logout
                </Button>
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
            {/* <Link to="/register">Register here</Link> */}
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
