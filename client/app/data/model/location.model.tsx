import { Location as LocationModel } from "../../src/components/location";

const Images = [{ image: require("../../assets/images/PizzaImage.jpg") }];

export const location: LocationModel[] = [
  {
    id: 1,
    title: "Papa Pizza",
    description: "This is the best food place",
    user: "Marlon J.",
    image: Images[0].image,
    rating: 4,
    reviews: 99,
  },
  {
    id: 2,
    title: "Pizza Planet",
    description: "This is the second best food place",
    user: "Gary L.",
    image: Images[0].image,
    rating: 5,
    reviews: 102,
  },
];
