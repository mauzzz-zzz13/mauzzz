import React, { useState } from "react";
import { Box, Flex, Input, Heading, CheckboxGroup, Checkbox, Stack, Card, Image, CardBody, Text, Spacer } from "@chakra-ui/react";

import TourDetailTwo from "./TourDetail";
import { Tours } from "../API/tours";

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

function Search() {
  const [query, setQuery] = useState('');
  const [ isCheckedExcursion, setIsChekedExcursion ] = useState(false);
  const [isCheckedCombo, setIsChekedCombo] = useState(false);
  const [isCheckedGip, setIsChekedGip] = useState(false);

  const checkerFilterExcursion = (tour:TourProps) => {
    if (isCheckedExcursion) {
      return String(tour.tourType).includes('экскурсионный');
    } 
    return true;
  }
  const checkerFilterCombo = (tour:TourProps) => {
    if (isCheckedCombo) {
      return String(tour.tourType).includes('комбинированный');
    } 
    return true;
  }
  const checkerFilterGip = (tour:TourProps) => {
    if (isCheckedGip) {
      return String(tour.tourType).includes('джип-тур');
    } 
    return true;
  }
  
  return <Flex>
    <Box width={['50%', null, '40%', '30%']} mx='auto' mt={10} ml={10}>
    <Input 
      placeholder="регион"
      w={300}
      onChange={e => setQuery(e.target.value)}
    />
    <CheckboxGroup>
          <Stack spacing={2}>
            <Heading size='lg'>Вид тура</Heading>
            <Checkbox onChange={e => setIsChekedExcursion(e.target.checked)}>экскурсионный</Checkbox>
            <Checkbox onChange={e => setIsChekedCombo(e.target.checked)}>комбинированный</Checkbox>
            <Checkbox onChange={e => setIsChekedGip(e.target.checked)}>джип-тур</Checkbox>
          </Stack>
        </CheckboxGroup>
    </Box>
    <Box>
      {Tours.filter(tour => tour.region
        .toLowerCase()
        .startsWith(query.toLowerCase()) && (checkerFilterExcursion(tour) && checkerFilterCombo(tour) && checkerFilterGip(tour)))  
        .map((tour) => {
        return <TourDetailTwo key={tour.id} {...tour} />
      })}
      {}
    </Box>
  </Flex>
}

export default Search;