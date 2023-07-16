import {
  Grid,
  GridItem,
  Image,
  Button,
  Text,
  Show,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
export default function DataTable({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const formattedDate = `${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}/${date
      .getDate()
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
    return formattedDate;
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  

  return (
    <>
    <Grid
      templateAreas={{
        base: `"row"
                "row"
                "row"
                "row"
                "row"
    `,
        lg: `"h1 h2 h3 h4 h5"
                            "row row row row row"
`,
      }}
      w={{ base: "90%", sm: "80%", lg: "100%" }}
      m={{ sm: "auto", lg: "0" }}
      rowGap="2rem"
      borderColor="brand.primary.300"
      p={{ base: "0", lg: "3rem" }}
    >
      {/* Column Headings */}
      <Show above="lg">
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h1">
          capsule_id
        </GridItem>
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h2">
          original_launch
        </GridItem>
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h3">
          type
        </GridItem>
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h4">
          status
        </GridItem>
        <GridItem colSpan={1} fontWeight="bold" textAlign="start" area="h5">
          Actions
        </GridItem>
      </Show>
      {data &&
        data?.map((item: any) => (
          <Wrapper>
            <GridItem
              display="flex"
              gap="1rem"
              colSpan={1}
              rowSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              area="row"
              borderRadius="8px 0 0 8px"
              borderLeft={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              p={{ base: "0", lg: "1.5rem" }}
              borderColor="brand.primary.300"
            >
              <Flex direction="column">
                <Show below="lg">
                  <Text variant="sectionTitle">Capsule Id</Text>
                </Show>

                <Text textAlign="left" variant="description">
                  {item.capsule_id}
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              display="flex"
              colSpan={1}
              rowSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign={{ base: "left", md: "center" }}
              area="row"
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderRight="0"
              borderLeft="0"
              borderColor="brand.primary.300"
            >
              <Flex direction="column">
                <Show below="lg">
                  <Text textAlign='left' variant="sectionTitle">original launch</Text>
                </Show>

                <Text variant="description">
                  {" "}
                  {formatDate(item?.original_launch)}
                </Text>
              </Flex>
            </GridItem>
            <GridItem
              display="flex"
              borderLeft="0"
              colSpan={1}
              rowSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              area="row"
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderColor="brand.primary.300"
            >
              <Flex direction="column">
                <Show below="lg">
                  <Text textAlign="left" variant="sectionTitle">
                    Type
                  </Text>
                </Show>

                <Text variant="description">{item.type}</Text>
              </Flex>
            </GridItem>
            <GridItem
              display="flex"
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderColor="brand.primary.300"
              colSpan={1}
              rowSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              area="row"
            >
              <Flex direction="column">
                <Show below="lg">
                  <Text variant="sectionTitle">Status</Text>
                </Show>
                <Text variant="description">{item.status}</Text>
              </Flex>
            </GridItem>
            <GridItem
              display="flex"
              borderLeft="0"
              rowSpan={1}
              borderRight={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderBottom={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderTop={{ base: "0", lg: "1px solid #FF8F5F" }}
              borderRadius="0 8px 8px 0"
              borderColor="brand.primary.300"
              colSpan={1}
              alignItems="center"
              fontWeight="bold"
              textAlign="center"
              area="row"
            >
              <Button onClick={()=>{
                  setSelectedItem(item);
                  setIsOpen(true);
              }} w={{ base: "100%", lg: "50%" }}>View</Button>
            </GridItem>
          </Wrapper>
        
        ))}
         <Modal isOpen={isOpen} onClose={handleClose} size="xl" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color='brand.primary.300'>Item Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Display the selected item data here */}
            {selectedItem && (
              <div>
                <p>Capsule ID: {selectedItem.capsule_id}</p>
                <p>Original Launch: {formatDate(selectedItem.original_launch)}</p>
                <p>Type: {selectedItem.type}</p>
                <p>Status: {selectedItem.status}</p>
                {/* Add more details as needed */}
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Grid>
    </>
  );
}

function Wrapper({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Update the width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {windowWidth <= 992 ? (
        <Flex
          direction={{ base: "column" }}
          border={{ base: "1px solid", lg: "0" }}
          borderColor={{ base: "brand.primary.300" }}
          p="3rem"
          gap="1rem"
          w={"100%"}
          borderRadius={{ base: "2rem", lg: "0" }}
        >
          {children}
        </Flex>
      ) : (
        children
      )}
    </>
  );
}
