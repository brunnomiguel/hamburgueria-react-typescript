import {
  forwardRef,
  useState,
  useEffect,
  useCallback,
  ForwardRefRenderFunction,
} from "react";

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

import { FieldError } from "react-hook-form";
import { IconType } from "react-icons/lib";

interface InputProps extends ChakraInputProps {
  label?: string;
  error?: FieldError | null;
  icon?: IconType;
}

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "negative.600",
  default: "grey.300",
  focus: "grey.600",
  filled: "success.600",
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, error = null, icon: Icon, ...rest },
  ref
) => {
  const [value, setValue] = useState("");
  const [variation, setVariation] = useState("default");

  useEffect(() => {
    if (error) {
      return setVariation("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      return setVariation("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value.length > 1 && !error) {
      return setVariation("filled");
    }
  }, [error, value]);

  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color="grey.400">{label}</FormLabel>}

      <InputGroup flexDirection="column">
        <ChakraInput
          onFocus={handleInputFocus}
          onBlurCapture={handleInputBlur}
          onChangeCapture={(event) => setValue(event.currentTarget.value)}
          color={inputVariation[variation]}
          borderColor={inputVariation[variation]}
          border="2px solid"
          bg="white"
          variant="outline"
          size="lg"
          h="60px"
          _hover={{ bg: "grey.50" }}
          _placeholder={{ color: "grey.300" }}
          _focus={{
            bg: "grey.50",
            border: "2px solid",
            borderColor: "grey.600",
          }}
          ref={ref}
          {...rest}
        />

        {Icon && (
          <InputRightElement color={inputVariation[variation]} mt="2.5">
            <Icon />
          </InputRightElement>
        )}

        {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
      </InputGroup>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
