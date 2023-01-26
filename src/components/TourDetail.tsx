import { Box, Card, Image, Text, CardBody, Flex, Heading, Spacer } from "@chakra-ui/react";

interface TourProps {
  id:number,
  photo:string,
  name:string,
  description:string,
  min_price:number,
  date:string,
  region:string,
  stars:string,
  complexity:number,
  tourType:string,
  comfort:string
}

function TourDetail(props:any) {
  
  const { id, photo, name, description, min_price, date, region, stars, complexity, tourType, comfort }:TourProps = {...props};

  return <>
    <Box width={['100%', null, '90%', '80%']} mx='auto'>
    <Card key={id}
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      my={10}
      borderRadius='20px'
      border='1px solid black'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={photo}
      />
      <Flex>
        <CardBody>
          <Heading size='md'>{name}</Heading>
          <Text>{description}</Text>
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={stars}
            py={3}
          />
          <Box>
            <Text>Вид тура: {tourType}</Text>
            <Text>Сложность: {complexity}</Text>
            <Text>Проживание и комфорт: {comfort}</Text>
          </Box>
        </CardBody>
        <Flex direction='column' p={5} minW='20%' w='25%'>
          <Heading size='md'>{min_price} ₽</Heading>
          <Spacer />
          <Text>{date}</Text>
          <Spacer />
          <Text>{region}</Text>
        </Flex>
      </Flex>
    </Card>
    </Box>
  </>
  
}

export default TourDetail;