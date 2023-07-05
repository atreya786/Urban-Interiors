import { Navbar, Button, Text, Avatar } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> origin/main
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
<<<<<<< HEAD
    alert("Registered Successfully");
=======
    const json = await response.json();
    // console.log(json);
    alert("Registered Successfully")
>>>>>>> origin/main
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

  const navigate = useNavigate();
  const handleProfile = () => {
<<<<<<< HEAD
    navigate("/Profile");
  };
  const handleCategory = () => {
    navigate("/Categories");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/About");
  };
  const handleContact = () => {
    navigate("/Contact");
  };
  const handleLogo = () => {
    navigate("/");
  };
  const handleCart = () => {
    navigate("/Cart");
  };
=======
    // console.log("clicked");
    navigate("/Profile");
  };
>>>>>>> origin/main

  const { search, updateSearch } = useContext(SearchContext);

  const active = window.location.pathname;

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
<<<<<<< HEAD
          <img
            onClick={handleLogo}
            src={image}
            style={{ height: "3rem", width: "15rem" }}
            alt=""
          />
=======
          <Link to="/">
            <img
              src={image}
              style={{ height: "3rem", width: "15rem" }}
              alt=""
            />
          </Link>
>>>>>>> origin/main
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link isActive={active === "/" ? true : false} href="/">
            Home
          </Navbar.Link>
          <Navbar.Link
<<<<<<< HEAD
            isActive={active === "/" ? true : false}
            onClick={handleHome}
            style={{ cursor: "pointer" }}
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/Categories" ? true : false}
            onClick={handleCategory}
            style={{ cursor: "pointer" }}
          >
=======
            isActive={active === "/Categories" ? true : false}
            href="Categories"
          >
>>>>>>> origin/main
            Categories
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/About" ? true : false}
            onClick={handleAbout}
            style={{ cursor: "pointer" }}
          >
            About Us
          </Navbar.Link>
          <Navbar.Link
            isActive={active === "/Contact" ? true : false}
            onClick={handleContact}
            style={{ cursor: "pointer" }}
          >
            Contact Us
          </Navbar.Link>
<<<<<<< HEAD
          <Navbar.Link
            isActive={active === "/Cart" ? true : false}
            onClick={handleCart}
            style={{ cursor: "pointer" }}
          >
=======
          <Navbar.Link isActive={active === "/Cart" ? true : false} href="Cart">
>>>>>>> origin/main
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
<<<<<<< HEAD
                      src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
=======
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
>>>>>>> origin/main
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
