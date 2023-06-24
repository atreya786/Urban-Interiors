import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

export default function Carousel() {
  const list = [
    {
      title: "Dinning Room",
      img: "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fsignature_design_by_ashley%2fcolor%2fgrindleburg_d754%20dining%20room%20group%209-b1.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20"
      
    },
    {
      title: "Living Room",
      img: "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/b/p/a1e18853-5f6b-4575-b42b-6c376b416583/assets/6ebe90025ada40719f69a901c3e1a2e0.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20"
      
    },
    {
      title: "Office",
      img: "https://www.royalfurniture.com/current/img/category/office.jpg"
      
    },
    {
      title: "Bedroom",
      img: "https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2fglobal_furniture%2fcolor%2favon-1_avonblk-qn-5pc-brwqkojfvnky6vjk-8jfybq.jpg?format=webp&quality=85&width=450&height=450&scale=both&trim.threshold=20",
      
    },
    {
      title: "Kids Bedroom",
      img: "https://www.homelane.com/blog/wp-content/uploads/2022/04/shutterstock_215654782.jpg ",
      
    },
    {
      title: "Outdoor",
      img: "https://assets.roomstogo.com/product/summerset-way-brown-5-pc-rectangle-outdoor-dining-set_7506612P_image-3-2?cache-id=5be4e29cedb76a5fad8da373b385b6e2&h=385 ",
      
    },
    {
      title: "Entertainment",
      img: "https://d9dvmj2a7k2dc.cloudfront.net/catalog/product/cache/1/image/731x481/17f82f742ffe127f42dca9de82fb58b1/c/a/cap_176-3_tv_room_pah20201_1.jpg ",
    },
    {
      title: "Wall Art",
      img: "https://www.cyruscrafts.com/img/cms/blog/hang-wall-art-without-nails/best-way-to-hang-pictures-without-nails.jpg",
    },
  ];
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate("/Categories")
  }

  return (
    <div className="container">

   <h2><b>| </b>Start Browsing</h2>
    <Grid.Container gap={1.5} justify="flex-start">
      {list.map((item, index) => (
        <Grid xs={6} sm={3} key={index} onClick={handleNavigate}>
          <Card isPressable>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={item.img}
                objectFit="cover"
                width={259}
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="center" align="center">
                <Text b>{item.title}</Text>
                
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
    </div>
  );
}
