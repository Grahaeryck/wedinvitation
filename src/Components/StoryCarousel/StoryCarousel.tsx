import { ReactNode, useState, useMemo, useEffect } from "react";
import Carousel from 'react-material-ui-carousel';
import StoryItems from '../../Asset/StoryItems.json';
import CarouselItems from "./CarouselItems";
import { styled } from '@mui/material/styles'

type Props = {};
  function StoryCarousel({}: Props) {

    return (
        <>
         <Carousel>
            {
                StoryItems.map( (item, i) => <CarouselItems key={i} item={item} /> )
            }
        </Carousel>
        </>
    );
  }

  export default StoryCarousel;