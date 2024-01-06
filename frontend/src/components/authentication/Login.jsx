import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Text,
  Input,
  Stack,
} from "@chakra-ui/react";

import { OAuthButtonGroup } from "./OAuthButtonGroup.jsx";
import { PasswordField } from "./PasswordField.jsx";

const Login = () => {
  const [email, setEmail] = useState();
  return (
    <Stack spacing="6">
      <Stack spacing="5">
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
      </Stack>
      <HStack justify="space-between">
        <Checkbox defaultChecked>Remember me</Checkbox>
        <Button variant="text" size="sm">
          Forgot password?
        </Button>
      </HStack>
      <Stack spacing="6">
        <Button colorScheme="blue" width="100%" style={{ marginTop: 15 }}>
          Sign in
        </Button>
        <HStack>
          <Divider />
          <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
            or continue with
          </Text>
          <Divider />
        </HStack>
        <OAuthButtonGroup />
      </Stack>
    </Stack>
  );
};

export default Login;
