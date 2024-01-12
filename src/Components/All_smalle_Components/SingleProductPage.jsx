import { Badge, Box, Button, Center, Divider, HStack, Image, Spinner, Stack, Text, VStack, Wrap } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import Loading from './Loding';
import { BiShoppingBag, } from "react-icons/bi";

const SingleProductPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [isButLoading, setIsButLoading] = useState(false);

  const [data, setData] = useState(null)

  const [bagbutton, setbagbutton] = useState(true)

  const { CartDataToMatch, handleCart } = useContext(AppContext)

  setTimeout(() => {
    setIsLoading(false)

  }, 1500);


  const handleClick = () => {

    setIsButLoading(true);

    setTimeout(() => {
      alert("Added To Cart")

      setIsButLoading(false);
      handleCart(data[0])
      setbagbutton(false)
      
    }, 1500);
  };

  const { id } = useParams()

  useEffect(() => {


    let obj = CartDataToMatch.filter((el) => {
      if (el.id === Number(id)) {
        return true
      }
      return false
    })

    setData(obj)

  }, [])

  if (isLoading) {

    return (
      <Loading />
    )

  }


  return (
    <Wrap  spacing={30} justify="center" style={{ marginTop: "150px", marginBottom: "50px" }} >

      <HStack spacing={5} >
        <Image borderRadius={15} src={data[0].Display_image} w="550px" minW="200px" />

      </HStack>


      <VStack width={550} align="revert-layer" spacing={5} >

        <Text marginTop={30} fontSize="2xl" color="gray.500" >{data[0].Name}</Text>

        <Badge fontSize="18px" variant="outline" width="fit-content" colorScheme="teal">{"4.4  ⭐"}</Badge>

        <Stack>

            <Text fontWeight="bold" fontSize="15px">Weight: {data[0].Weight}</Text>
          <HStack alignContent="center">


            <Text fontWeight="bold" fontSize="4xl" >₹{data[0].price}</Text>


          </HStack>

        </Stack>

      

        <Divider />


         <Text>Customer FeedBack</Text>

        <Box>

          <Image src='https://tagembed.com/blog/wp-content/uploads/2022/03/customer-reviews-examples.jpg' />
        </Box>

        <HStack w="full" >

          <Button onClick={() => handleClick()} disabled={!isButLoading && !bagbutton && "ADDED"} fontSize="x-large" padding={8} w="full" colorScheme='teal'>

            <BiShoppingBag fontSize="30px" />
            {!isButLoading && bagbutton && "ADD TO BAG"}
            {!isButLoading && !bagbutton && "ADDED"}
            {isButLoading && (
              <Spinner
                thickness="4px"
                speed="0.55s"
                emptyColor="gray.200"
                color="blue.500"
                size="lg"
              />
            )}
          </Button>
        
        </HStack>
      </VStack>
    </Wrap>
  )
}

export default SingleProductPage


