import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text, Grid, GridItem } from "@chakra-ui/react";
import { FaEquals } from "react-icons/fa";

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
          <Input type="text" value={equation} onChange={(e) => setEquation(e.target.value)} placeholder="e.g., 2 + 3 * 4" />
        </FormControl>
        <Button type="submit" colorScheme="blue" leftIcon={<FaEquals />}>
          Calculate
        </Button>
      </form>
      <VStack mt={6} spacing={4} align="stretch">
        <Text fontSize="xl">Result:</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={2} p={4} borderWidth={1} borderRadius="md">
          <GridItem colSpan={3}>
            <Text fontSize="2xl" textAlign="right">
              {result}
            </Text>
          </GridItem>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Index;
