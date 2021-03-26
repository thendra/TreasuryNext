import React from "react";
import { Box, Fab, Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Items } from "../src/generated/graphql";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    margin: "15px",
  },
  optionList: {
    display: "flex",
  },
  card: {
    width: "300px",
    height: "400px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
    "&:hover": {
      "& $details": {
        transform: "none",
        "& a": {
          transform: "none",
        },
      },
      "& img": {
        transform: "scale(1.2)",
      },
    },
    "& img": {
      backgroundColor: "#6f6866",
      width: "100%",
      height: "100%",
      objectFit: "scale-down",
      transition: "all 0.3s",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      flex: "1 1 100%",
      "& $details": {
        transform: "none",
        "& a": {
          transform: "none",
        },
      },
      "& img": {
        transform: "scale(1.2)",
      },
    },
  },
  details: {
    boxSizing: "border-box",
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    width: "100%",
    color: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#38302e",
    padding: `${20}px ${10}px`,
    transform: "translateY(100%)",
    transition: "all 0.3s",
    [theme.breakpoints.down("xs")]: {
      "& h2": {
        fontSize: "14px",
      },
    },
  },
}));

/**
 * Summary display component for a created item
 *
 * TODO: Add link to detailed display to make use of description and is public fields, add support for authorised viewing using created_by field, add deletion funcionality
 */
const ItemSummary = ({
  title,
  image_url,
}: Pick<Items, "image_url" | "title">) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.card}>
        <img
          className="mainImage"
          src={image_url || "/images/placeholder-image.jpg"}
          alt={title || ""}
        />
        <Box className={classes.details}>
          <Typography variant="h5">{title}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ItemSummary;
