import { Button, Divider, HStack, Image, Spinner, Wrap, Text, VStack, FormControl, FormLabel, Input, PinInput, PinInputField, } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { BiShoppingBag } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import CartSingleCard from '../All_smalle_Components/CartSingleCard';
import Loading from '../All_smalle_Components/Loding';


const Cart = () => {



  const { cartDataEmpty,cartData, price, TotalQty } = useContext(AppContext)

  const [isLoading, setIsLoading] = useState(true);
  const [isButLoading, setIsButLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    last:"",
    address:"",
    number:"",
    email:"",
  })

  setTimeout(() => {
    setIsLoading(false)

  }, 1500);

  const BackToPRoductPage = () => {
    setIsButLoading(true);

    setTimeout(() => {


      setIsButLoading(false);
      navigate("/")
    }, 1500);
  };

  console.log(cartData)
 

  const handleChange = (e)=>{
      setuser({...user,[e.target.id]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(user.name=="" || user.last=="" || user.address=="" || user.email=="" || user.number==""){
      alert("Please Fill CareFully")
    }
    else{
      
      localStorage.setItem('user', JSON.stringify([user,cartData]))
      
        navigate("/OrderSuccessfull")
        cartDataEmpty()
      
    }
    setTimeout(()=>{
      navigate("/customerDetails")
   },3000)
  }
  
  // console.log(user)
  if (isLoading) {

    return (
      <Loading />
    )

  }


  if (cartData.length === 0) {

    return (

      <Wrap justify="center" style={{ marginTop: "80px" }}>

        <HStack>

          <Image src='https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif' />

          <VStack spacing={30} >
            <Text fontSize="3xl" >Nothing In The Bag </Text>

            <Divider />
            <Button onClick={() => BackToPRoductPage()} fontSize="x-large" padding={8} colorScheme='yellow'>


              <BiShoppingBag fontSize="30px" />
              {!isButLoading && "Continue Shopping"}
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



          </VStack>
        </HStack>

      </Wrap>

    )

  }



  return (


    <VStack marginTop="100px" justify="center" >

      <Text fontSize="2xl" fontWeight="extrabold" >CART Iteam: {TotalQty}</Text>

      <Wrap padding={10} spacing={50} >

        <VStack spacing={5}   >

          <HStack spacing={5} w="full" padding={3} bg="#fcffee" > <Image w={10} src='https://images.bewakoof.com/web/Red-truck.png' /> <Text>Yay! You get FREE delivery on this order</Text></HStack>
          {
            cartData.map((el) => (
              <CartSingleCard el={el} />
            ))
          }
        </VStack>

        {/* Payment section */}

        <VStack align="flex-start" spacing={5} padding={5}  >


          <VStack>
            <HStack>
              <FormControl  >
                <FormLabel>First Name</FormLabel>
                <Input size="sm" id='name' onChange={handleChange} />

              </FormControl>
              <FormControl  >
                <FormLabel>Last Name</FormLabel>
                <Input size="sm" id='last' onChange={handleChange} />

              </FormControl>
            </HStack>

            <FormControl  >
              <FormLabel>Address</FormLabel>
              <Input size="sm" id='address' onChange={handleChange} />

            </FormControl>

            <HStack>
              <FormControl  >
                <FormLabel>Email</FormLabel>
                <Input size="sm" id='email' onChange={handleChange} />

              </FormControl>
              <FormControl  >
                <FormLabel>City</FormLabel>
                <Input type="city" size="sm" />
              </FormControl>

            </HStack>

            <FormControl  >
              <FormLabel>Mobile</FormLabel>
              <Input type="number" size="sm" id='number' onChange={handleChange} />
            </FormControl>
          </VStack>


          <Divider />

          <VStack>

            <HStack width="full" >
              <FormControl  >
                <FormLabel>Card Number</FormLabel>
                <Input w={280} size="sm" />

              </FormControl>

              <FormControl >
                <FormLabel>CVV</FormLabel>
                <HStack width="full" >

                  <PinInput size="sm">
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>

              </FormControl>


            </HStack>

            <HStack>
              <FormControl  >
                <FormLabel>Exp MOnth</FormLabel>
                <Input size="sm" />

              </FormControl>
              <FormControl  >
                <FormLabel>Exp Year</FormLabel>
                <Input size="sm" />

              </FormControl>
            </HStack>

            <Button style={{ marginTop: "20px" }} onClick={handleSubmit} fontSize="x" padding={3} w="full" colorScheme='yellow'> PAY ₹{price} </Button>
          </VStack>
        </VStack>

      </Wrap>
    </VStack>

  )
}

export default Cart
