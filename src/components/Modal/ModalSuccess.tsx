import {
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

interface ModalSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  onClick: () => void;
}

export const ModalSuccess = ({
  isOpen,
  onClick,
  onClose,
}: ModalSuccessProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent padding="2" bg="white" color="grey.600">
        <ModalHeader display="flex">
          <Center
            bg="information.600"
            w="30px"
            h="30px"
            borderRadius="5px"
            outline="0"
          >
            <FaExclamation color={theme.colors.white} />
          </Center>
          <Text fontWeight="bold" ml="2">
            Que legaaal...
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
        <ModalBody textAlign="center">
          <Text>
            Sua conta foi criada com sucesso, <br /> agora você pode fazer
            <b> login</b>
          </Text>
        </ModalBody>
        <ModalFooter flexDirection="column">
          <Button
            bg="information.600"
            color="white"
            w="100%"
            h="60px"
            onClick={onClick}
            _hover={{ opacity: "0.8" }}
          >
            Ir para login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
