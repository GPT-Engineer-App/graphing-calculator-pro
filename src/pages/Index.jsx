import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";
import { FaEquals } from "react-icons/fa";
import Plot from "../components/Plot";

const Index = () => {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-eval
      const evaluatedResult = eval(equation);
      setResult(evaluatedResult);
    } catch (error) {
      setResult("Invalid equation");
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>
        Graphing Calculator
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="equation" mb={4}>
          <FormLabel>Enter an equation:</FormLabel>
          <Input type="text" value={equation} onChange={(e) => setEquation(e.target.value)} placeholder="e.g., y = 2*x + 1" />
        </FormControl>
        <Button type="submit" colorScheme="blue" leftIcon={<FaEquals />}>
          Calculate
        </Button>
      </form>
      <VStack mt={6} spacing={4} align="stretch">
        <Text fontSize="xl">Result:</Text>
        <Text fontSize="2xl">{result}</Text>
        {equation && <Plot equation={equation} />}
      </VStack>
    </Box>
  );
};

export default Index;
