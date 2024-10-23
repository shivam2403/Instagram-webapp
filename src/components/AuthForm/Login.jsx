import { Alert, AlertIcon, Button, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, error, login } = useLogin();

  

  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        fontSize={14}
        type="password"
        value={inputs.password}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />

      {error && (
        <Alert status="error" fontSize={13} p={2} borderRadius={4}>
          <AlertIcon fontSize={12} />
          {error.message}
        </Alert>
      )}

      <Button
        w={"full"}
        colorScheme="blue"
        size={"sm"}
        fontSize={14}
        isLoading={loading}
        onClick={() => login(inputs)}
      >
        Login
      </Button>

      <Text fontSize={14} mt={-3} width={'full'} textAlign={'right'} textColor={"blue.500"}>
        <Link to={'/forgot-password'} style={{textDecoration:"underline"}} >Forgot your password?</Link>
      </Text>
    </>
  );
};

export default Login;
