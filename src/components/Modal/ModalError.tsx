import {
  Box,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { FaExclamation, FaTimes } from "react-icons/fa";
import { theme } from "../../styles/theme";

interface ModalErrorProps {
  isOpen: boolean;
  onClose: () => void;
  error: string;
  secondaryText: string;
}

export const ModalError = ({
  isOpen,
  onClose,
  error,
  secondaryText,
}: ModalErrorProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color="grey.600">
        <ModalHeader display="flex">
          <Center
            bg="negative.600"
            w="30px"
            h="30px"
            borderRadius="5px"
            outline="0"
          >
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Ooops!
          </Text>
          <Center
            onClick={onClose}
            as="button"
            ml="auto"
            w="32px"
            h="32px"
            bg="negative.600"
            fontSize="lg"
            borderRadius="md"
            outline="0"
          >
            <FaTimes color={theme.colors.white} />
          </Center>
        </ModalHeader>
        <ModalBody>
          <Text color="grey.400" textAlign="center">
            Ocorreu um erro: <b>{error}</b>
          </Text>
        </ModalBody>
        <ModalFooter display="column">
          <Button
            onClick={onClose}
            bg="negative.600"
            color="white"
            w="100%"
            h="60px"
            _hover={{ opacity: "0.7" }}
          >
            Tentar novamente
          </Button>
          <Text mt="4px" textAlign="center">
            <Box color="grey.400" dangerouslySetInnerHTML={{ __html: secondaryText }} />
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
