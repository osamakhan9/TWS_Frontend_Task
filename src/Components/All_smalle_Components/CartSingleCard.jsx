import { 
    Wrap,
    HStack,
    VStack,
    Text,
    Badge,
    ButtonGroup,
    IconButton,
    Button,
    Spacer,
    Stack,
    Divider,
    Image

} from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons';
import React, { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';

const CartSingleCard = ({el}) => {

  

const {handleChange,handleRemove } = useContext(AppContext)

 
 
  return (


    <Wrap w={600} spacing={3} borderWidth='1px' borderRadius='lg' overflow='hidden' padding="5">
          
          <HStack w="full" >
           
           
                 <VStack align="revert-layer" spacing={4} >
            
           
            <Text  fontSize="xl" color="gray.500" >{el.Name}</Text>
            
            <Badge fontSize="10x" variant="outline" width="fit-content" colorScheme="teal">{"4.4  ⭐"}</Badge>
            
            <Stack>
            
                    <Text>Weight: {el.Weight}</Text>
                   <HStack alignContent="center">
                    
                   <Text fontWeight="bold" fontSize="2xl" >₹{el.price}</Text>
                   </HStack>
       
                   <HStack spacing={35} >
                       
                         
                       <ButtonGroup size='sm' isAttached variant='outline'>
                          
                          <Button  fontWeight="bold" fontSize="xl" onClick={()=> handleChange(el, -1)  } >-</Button>
                       
                           <Button>{el.amount}</Button>
                          
                           <IconButton 
                           onClick={()=> handleChange(el, 1)  } 
                           aria-label='Add to friends' icon={<AddIcon w={3} h={3} />} />
                         </ButtonGroup>


                   </HStack>
                  
                </Stack>
            
            
                </VStack>
            
            <Spacer />

              <Stack w={120}>
              <Image style={{borderRadius: "5px"}}  src={el.Display_image}  />
    
              </Stack>
              
          </HStack>

          <Divider   />
            
         
          <HStack w="full" spacing={5} >
            <Button onClick={()=>handleRemove(el.id)} w="40%" size='md' isAttached variant='outline'>REMOVE</Button>
            
          </HStack>

          </Wrap>
  )
}

export default CartSingleCard
