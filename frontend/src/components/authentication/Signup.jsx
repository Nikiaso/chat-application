import React, { useState } from "react";
import { Stack, FormLabel, Input, FormControl, Button } from "@chakra-ui/react";
import { PasswordField } from "./PasswordField";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [pic, setPic] = useState();

  const postDetails = () => {};

  const submitHandler = () => {};

  return (
    <Stack spacing="6">
      <Stack spacing="5">
        <FormControl id="first-name">
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="phone-no">
          <FormLabel>Phone No.</FormLabel>
          <Input
            type="number"
            placeholder="Enter your phone no."
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </FormControl>
        <FormControl id="email">
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </FormControl>
        <FormControl id="password">
          <PasswordField />
        </FormControl>
        <FormControl id="pic">
          <FormLabel>Upload your Picture</FormLabel>
          <Input
            type="file"
            accept="image/*"
            p={1.5}
            onChange={(e) => postDetails(e.target.files[0])}
          />
        </FormControl>
      </Stack>
      <Stack spacing="6">
        <Button
          colorScheme="blue"
          width="100%"
          style={{ marginTop: 15 }}
          onClick={submitHandler}
        >
          Sign up
        </Button>
      </Stack>
    </Stack>
  );
};

export default Signup;
