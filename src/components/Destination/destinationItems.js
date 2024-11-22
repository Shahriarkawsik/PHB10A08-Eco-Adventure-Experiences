import { useEffect, useState } from "react";

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export const DestinationItems = () => {
  const [destinationItems, setDestinationItems] = useState([]);

  useEffect(() => {
    fetch("/destination.json")
      .then((response) => response.json())
      .then((data) => setDestinationItems(data));
  }, []);
  return destinationItems;
};
