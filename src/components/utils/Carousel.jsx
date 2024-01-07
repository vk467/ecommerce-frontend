import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import DisplayCard from "./DisplayCard";


const Carousel = () => {

  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const [slideDirection, setSlideDirection] = useState("left");

  const cardsPerPage = 2;

  const duplicateCards= Array.from(
    { length: 10 },
    (_, i) => <DisplayCard key={i} />
  );

  // these two functions handle changing the pages
  const handleNextPage = () => {
    setSlideDirection("left");
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setSlideDirection("right");
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    setCards(duplicateCards);
  }, []);

  const containerWidth = cardsPerPage * 500; // 250px per card

  return (
    
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        height: "400px",
        width: "100%",
        marginTop: "40px",
      }}
    >
      <IconButton
        onClick={handlePrevPage}
        sx={{ m: 5 }}
        disabled={currentPage === 0}
      >
        <NavigateBeforeIcon />
      </IconButton>

      <Box sx={{ width: `${containerWidth}px`, height: "100%" }}>
        {cards.map((card, index) => (
          <Box
            key={`card-${index}`}
            sx={{
              width: "100%",
              height: "100%",
              display: currentPage === index ? "block" : "none",
            }}
          >
            
            <Slide direction={slideDirection} in={currentPage === index}>
              <Stack
                spacing={2}
                direction="row"
                alignContent="center"
                justifyContent="center"
                sx={{ width: "100%", height: "100%" }}
              >
                {/* this slices the cards array to only display the amount you have previously determined per page*/}
                {cards.slice(
                  index * cardsPerPage,
                  index * cardsPerPage + cardsPerPage
                )}
              </Stack>
            </Slide>
          </Box>
        ))}
      </Box>
      <IconButton
        onClick={handleNextPage}
        sx={{
          margin: 5,
        }}
        disabled={
          currentPage >= Math.ceil((cards.length || 0) / cardsPerPage) - 1
        }
      >
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
}

export default Carousel;