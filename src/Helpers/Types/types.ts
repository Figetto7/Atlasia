import type { User, UserCredential } from "firebase/auth";


export type AuthContextType = {
  user: User | null;
  loading: boolean;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signUpWithEmail: (email: string, password: string) => Promise<UserCredential>;
  resetPassword: (email: string) => Promise<void>;
  signInWithGoogle: () => Promise<UserCredential>;
  signOutUser: () => Promise<void>;
};


export type TravelInformationState = {
  destination: string;
  wayOfTravel: "flight" | "train" | "car" | "";
  hotelChosen: string;
  startDay: Date | null;
  endDay: Date | null;
  updateDestination: (newDestination: string) => void;
  updateWayOfTravel: (newWayOfTravel: "flight" | "train" | "car" | "") => void;
  updateHotelChosen: (newHotelChosen: string) => void;
  updateStartDay: (newStartDay: Date) => void;
  updateEndDay: (newEndDay: Date) => void;
};

export type Destination = {
  name: string;
  image: string;
  alt: string;
  country: string;
};