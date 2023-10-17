import { UserType } from "../interfaces/user.type";


export const UserMockData: UserType[] = [
  {
    id: 1,
    name: "Lee",
    age: 27,
    phone: "010-1234-1234",
    hobby: {
      sport: "Boxing",
      study: "react",
    },
  },
  {
    id: 2,
    name: "Park",
    age: 30,
    phone: "010-2345-2345",
    hobby: {
      sport: "Baseball",
      study: "HTML/CSS",
    },
  },
  {
    id: 3,
    name: "Yoon",
    age: 23,
    phone: "010-3456-3456",
    hobby: {
      sport: "soccer",
      study: "TSX(JSX)",
    },
  },
];
