import { Avatar } from "@chakra-ui/avatar";
import { Box, Text } from "@chakra-ui/layout";
import { ChatState } from "../../Context/ChatProvider";

const UserListItem = ({ handleFunction, user }) => {
  const { name, email, pic } = user[0]; // Destructure the properties from searchResult object
 
  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={name} // Use the name property
        src={pic} // Use the pic property
      />
      <Box>
        <Text>{name}</Text> {/* Use the name property */}
        <Text fontSize="xs">
          <b>Email : </b>
          {email} {/* Use the email property */}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
