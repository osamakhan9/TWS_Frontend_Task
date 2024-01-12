
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'



export const AppContext = createContext()




// Name, Image, Weight, Price.

const AllProductsData = {
  Product: [
    {
      id: 1,
      Display_image: "https://assets.ajio.com/medias/sys_master/root/20230825/7xrX/64e80892ddf77915197a574d/-473Wx593H-466493467-black-MODEL4.jpg",

      Name: "Baggy Jeans with Insert-Pockets",
      price: 699,
      Weight: "1b 1b",
      amount: 1,
    },
    {
      id: 2,
      Display_image: "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/4/d/c/free-half-sleeve-kedar-gowtram-original-imagnrcybvj9nerw.jpeg?q=70",

      Name: "Embroidered Semi Stitched Lehenga Choli",
      price: 1499,
      Weight: "2b 2b",
      amount: 1,

    },
    {
      id: 3,
      Display_image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/z/s/w/xxl-4424-sheetal-associates-original-imagqf6nmfmnyrym.jpeg?q=70",

      Name: "Casual Regular Sleeves Solid Women White Top",
      price: 399,
      Weight: "0.4 1b",
      amount: 1,

    },
    {
      id: 4,
      Display_image: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/u/8/s-20021-sheetal-associates-original-imagq7dfgyhh4chf.jpeg?q=70",

      price: 499,
      Name: "Women Co-ords White, Black Dress",
      Weight: "3b 1b",
      amount: 1,

    },
    {
      id: 5,
      Display_image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/q/x/xl-patti-piko-trendy-era-original-imagm2tm4kcszsgm.jpeg?q=70",

      Name: "Casual Regular Sleeves Striped Women Multicolor Top",
      price: 799,
      Weight: "1b 4b",
      amount: 1,

    },
    {
      id: 6,
      Display_image: "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",

      Name: "Black Half Sleeve T-shirt",
      price: 399,
      Weight: "2v 4b",
      amount: 1,

    }, {
      id: 7,
      Display_image: "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/z/0/k/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhcgyk7papf.jpeg?q=70",

      Name: "Bubble Gum Stripe T-Shirt",
      price: 499,
      Weight: "9s 3b",
      amount: 1,

    },
    {
      id: 8,
      Display_image: "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",

      Name: "Toffe Half Sleeve T-shirt",
      price: 299,
      Weight: "4c 1a",
      amount: 1,

    },
    {
      id: 9,
      Display_image: "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",

      Name: "Men's Blue & Pink Color Block T-shirt    ",
      price: 399,
      Weight: "5b 7b",
      amount: 1,

    },
    {
      id: 10,
      Display_image: "https://rukminim2.flixcart.com/image/832/832/l33cia80/sari/d/e/j/free-chand-black-atilaa-fashion-unstitched-original-imageafqqr5ahseg.jpeg?q=70",

      price: 499,
      Name: "Embroidered Daily Wear Net Saree",
      Weight: "09a 2b",
      amount: 1,

    },
    {
      id: 11,
      Display_image: "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751638-2.jpg",

      Name: "Toffe Half Sleeve T-shirt",
      price: 299,
      Weight: "4b 7b",
      amount: 1,

    },
    {
      id: 12,
      Display_image: "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751023-1.jpg",

      Name: "Black Half Sleeve T-shirt",
      price: 399,
      Weight: "7b 1b",
      amount: 1,

    },


  ],

}

const CartDataToMatch = [
  {
    id: 1,
    Display_image: "https://assets.ajio.com/medias/sys_master/root/20230825/7xrX/64e80892ddf77915197a574d/-473Wx593H-466493467-black-MODEL4.jpg",

    Name: "Baggy Jeans with Insert-Pockets",
    price: 699,
    Weight: "1b 1b",
    amount: 1,
  },
  {
    id: 2,
    Display_image: "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/4/d/c/free-half-sleeve-kedar-gowtram-original-imagnrcybvj9nerw.jpeg?q=70",

    Name: "Embroidered Semi Stitched Lehenga Choli",
    price: 1499,
    Weight: "2b 2b",
    amount: 1,

  },
  {
    id: 3,
    Display_image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/z/s/w/xxl-4424-sheetal-associates-original-imagqf6nmfmnyrym.jpeg?q=70",

    Name: "Casual Regular Sleeves Solid Women White Top",
    price: 399,
    Weight: "0.4 1b",
    amount: 1,

  },
  {
    id: 4,
    Display_image: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/u/8/s-20021-sheetal-associates-original-imagq7dfgyhh4chf.jpeg?q=70",

    price: 499,
    Name: "Women Co-ords White, Black Dress",
    Weight: "3b 1b",
    amount: 1,

  },
  {
    id: 5,
    Display_image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/q/x/xl-patti-piko-trendy-era-original-imagm2tm4kcszsgm.jpeg?q=70",

    Name: "Casual Regular Sleeves Striped Women Multicolor Top",
    price: 799,
    Weight: "1b 4b",
    amount: 1,

  },
  {
    id: 6,
    Display_image: "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",

    Name: "Black Half Sleeve T-shirt",
    price: 399,
    Weight: "2v 4b",
    amount: 1,

  }, {
    id: 7,
    Display_image: "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/z/0/k/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhcgyk7papf.jpeg?q=70",

    Name: "Bubble Gum Stripe T-Shirt",
    price: 499,
    Weight: "9s 3b",
    amount: 1,

  },
  {
    id: 8,
    Display_image: "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",

    Name: "Toffe Half Sleeve T-shirt",
    price: 299,
    Weight: "4c 1a",
    amount: 1,

  },
  {
    id: 9,
    Display_image: "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",

    Name: "Men's Blue & Pink Color Block T-shirt    ",
    price: 399,
    Weight: "5b 7b",
    amount: 1,

  },
  {
    id: 10,
    Display_image: "https://rukminim2.flixcart.com/image/832/832/l33cia80/sari/d/e/j/free-chand-black-atilaa-fashion-unstitched-original-imageafqqr5ahseg.jpeg?q=70",

    price: 499,
    Name: "Embroidered Daily Wear Net Saree",
    Weight: "09a 2b",
    amount: 1,

  },
  {
    id: 11,
    Display_image: "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751638-2.jpg",

    Name: "Toffe Half Sleeve T-shirt",
    price: 299,
    Weight: "4b 7b",
    amount: 1,

  },
  {
    id: 12,
    Display_image: "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751023-1.jpg",

    Name: "Black Half Sleeve T-shirt",
    price: 399,
    Weight: "7b 1b",
    amount: 1,

  },


]

const AppContextProvider = ({ children }) => {


  const [cartData, setCartData] = useState([])

  const [price, setPrice] = useState(0);
  const [discountPrice, setdiscountPrice] = useState(0);
  const [TotalQty, setTotalQty] = useState(0);
  const [Totalprice, setTotalPrice] = useState(0);


  const handleRemove = (id) => {
    const arr = cartData.filter((item) => item.id !== id);
    setCartData(arr);
    handlePrice();
  };

  const cartDataEmpty = () => {
    setCartData([])
  }

  const handlePrice = () => {
    let ans = 0;
    let discountP = 0;
    let Qty = 0;

    cartData.map((item) => {
      ans += item.amount * item.price
      discountP += item.amount * item.Weight
      Qty += item.amount
    });
    setPrice(ans);
    setdiscountPrice(discountP)
    setTotalPrice(ans + discountP)
    setTotalQty(Qty)
  };



  useEffect(() => {
    handlePrice();
  });

  console.log(price)


  const handleCart = (data) => {

    if (cartData.indexOf(data) !== -1) return;
    setCartData([...cartData, data])

  }

  console.log(cartData)


  const handleChange = (item, d) => {

    const ind = cartData.indexOf(item);
    const arr = cartData;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartData([...arr]);

  };


  return (

    <div>

      <AppContext.Provider value={{
        AllProductsData, cartData, handleCart, CartDataToMatch, handleChange, handleRemove, price, discountPrice, Totalprice, cartDataEmpty,
        handlePrice, TotalQty
      }} >

        {children}

      </AppContext.Provider>


    </div>
  )
}

export default AppContextProvider
