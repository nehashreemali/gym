import { Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState, useEffect } from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";
import { exerciseOption, fetchData } from "./util/fetchData";
const SearchExercises = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOption
      );
      setBodyParts(["all", ...bodyPartData]);
    };
    fetchExerciseData();
  }, []);
  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOption
      );


      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
      console.log(searchedExercises);
    }

    
  };
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      p="20px"
      mt="37px"
      textAlign="center"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercise you <br />
        Should know
      </Typography>
      <Box position="relative" ab="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            borderRadius: "40px",
            backgroundColor: "#ffff",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="test"
        />
        <Button
          onClick={handleSearch}
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", sm: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
        >
          search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar data={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
