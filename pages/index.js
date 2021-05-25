import { Flex, Text } from '@chakra-ui/layout';
import DeepEffect from '../components/DeepEffect';

export default function Home() {
  return (
    <Flex w="100%" h="100vh" alignItems="center" justifyContent="center">
      <DeepEffect color="brand.100">
        <Flex
          w="100px"
          h="75px"
          alignItems="center"
          justifyContent="center"
          bg="brand.100"
          rounded="18"
        >
          <Text color="white" fontSize="lg" fontWeight="semibold">
            Hello!
          </Text>
        </Flex>
      </DeepEffect>
    </Flex>
  );
}
