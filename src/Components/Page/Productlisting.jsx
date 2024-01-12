import React, { useContext, useState } from 'react'
import { AppContext } from '../../Context/AppContext'
import { Divider, HStack, SimpleGrid, Stack, Wrap } from '@chakra-ui/react'
import ProductCard from '../All_smalle_Components/ProductCard'
import Loading from '../All_smalle_Components/Loding'
import { useEffect } from 'react'


const Productlisting = () => {


  const {AllProductsData } = useContext(AppContext)


  const [Product, setProduct] = useState([])

  // is Loading   // 
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false)


  }, 1500);


  useEffect(() => {
    setProduct(AllProductsData.Product)


  }, [Product])

  if (isLoading) {

    return (
      <Loading />
    )

  }

  return (

    <Stack style={{ marginTop: "80px" }} >


      <Wrap justify='center' style={{ margin: "auto", marginTop: "20px" }}  >

        <Divider orientation='horizontal' />

        <HStack spacing={50} width="1200px" justify="stretch"  >


          

          {/* Product */}


          <SimpleGrid spacing={5} columns={[1, 2, 2, 3]}>

            {Product.map((el) => (
              <ProductCard  {...el} />
            ))}



          </SimpleGrid>

        </HStack>




      </Wrap>




    </Stack>


  )
}

export default Productlisting
