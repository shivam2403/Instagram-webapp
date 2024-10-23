import React, { useState } from "react";
import { Input, Button, Alert, AlertIcon, Box, Heading, Text } from "@chakra-ui/react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const [resetEmail, setResetEmail] = useState("");
  const [resetMessage, setResetMessage] = useState(null);

  const auth = getAuth();

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetMessage({ type: "success", text: "Password reset email sent!" });
    } catch (error) {
      setResetMessage({ type: "error", text: error.message });
    }
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="md"
      mx="auto"
      mt={12}
      textAlign="center"
    >
      <Heading as="h2" size="md" mb={4} color="blue.500">
        Reset Your Password
      </Heading>
      <Text mb={6} color="whitesmoke">
        Enter your email address below and we'll send you a link to reset your password.
      </Text>
      <Input
        placeholder="Enter your email"
        fontSize={14}
        type="email"
        value={resetEmail}
        size="md"
        mb={4}
        onChange={(e) => setResetEmail(e.target.value)}
      />
      <Button
        w="full"
        colorScheme="blue"
        size="md"
        fontSize={14}
        onClick={handlePasswordReset}
        mb={4}
      >
        Send Reset Link
      </Button>

      {resetMessage && (
        <Alert
          status={resetMessage.type}
          fontSize={13}
          p={3}
          borderRadius="md"
          mt={4}
        >
          <AlertIcon />
          {resetMessage.text}
        </Alert>
      )}
    </Box>
  );
};

export default ForgotPassword;
