import { create } from 'zustand'
import type { TravelInformationState } from '../Helpers/Types/types';

export const useTravelInformation = create<TravelInformationState>((set) => ({
  destination: "",
  wayOfTravel: "",
  hotelChosen: "",
  startDay: null,
  endDay: null,
  updateDestination: (newDestination) => set({ destination: newDestination }),
  updateWayOfTravel: (newWayOfTravel) => set({ wayOfTravel: newWayOfTravel }),
  updateHotelChosen: (newHotelChosen) => set({ hotelChosen: newHotelChosen }),
  updateStartDay: (newStartDay) => set({ startDay: newStartDay }),
  updateEndDay: (newEndDay) => set({ endDay: newEndDay }),
}));