import { Box, Container, Heading, Text, Image, VStack, Button, Badge, Textarea } from "@chakra-ui/react";
import { FaCalendarAlt, FaUserGraduate } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={2}>Introduction to React</Heading>
          <Text mt={4}>Learn the fundamentals of React, including declarative UI, components, and hooks. This course will take you from a beginner to an intermediate level.</Text>
          <Box mt={4} display="flex" alignItems="center">
            <FaCalendarAlt />
            <Text ml={2}>Starts on: January 15, 2024</Text>
          </Box>
          <Box mt={2} display="flex" alignItems="center">
            <FaUserGraduate />
            <Text ml={2}>120 Enrolled</Text>
          </Box>
        </Box>
        <Image borderRadius="md" src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2V8ZW58MHx8fHwxNzE1NTgzNDgyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Course Image" />
        <Button colorScheme="teal" size="lg">
          Enroll Now
        </Button>
        <Badge colorScheme="green" p={2} borderRadius="full">
          Bestseller
        </Badge>
        <Box p={5} mt={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading mb={2}>Feedback</Heading>
          <Textarea placeholder="Enter your feedback here..." mb={3} />
          <Button colorScheme="blue">Submit Feedback</Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
