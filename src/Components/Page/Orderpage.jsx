import {Text,Image, Container,TableContainer,Table,Thead,Th,Tr,Tbody,Td } from '@chakra-ui/react'

import React from 'react'

const Orderpage = () => {

	let data = JSON.parse(localStorage.getItem("user"));
	console.log(data)

  return (
	<>
	<Container marginTop='100px' maxW='6xl'>
		<Text textAlign='center' mb='30px' fontSize='20px' fontWeight='bold'>Customer information</Text>
	<TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Email</Th>
		<Th>Address</Th>
		<Th>Number</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{data[0].name}</Td>
        <Td>{data[0].last}</Td>
        <Td>{data[0].email}</Td>
		<Td>{data[0].address}</Td>
		<Td>{data[0].number}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>



<Text mt='50px' mb='30px' color='teal' textAlign='center' fontSize='20px' fontWeight='bold'>Product Purchase </Text>
	<TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Name</Th>
        <Th>Price</Th>
		<Th>Quantity</Th>
		<Th>Weight</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>
			<Image maxW='20'  src={data[1][0].Display_image}/>
		</Td>
        <Td>{data[1][0].Name}</Td>
        <Td>{data[1][0].price}</Td>
		<Td>{data[1][0].amount}</Td>
		<Td>{data[1][0].Weight}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  
</Container>
	</>
  )
}

export default Orderpage