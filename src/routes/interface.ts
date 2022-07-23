import { CarDTO } from "../dtos/CarDTO"

export type IRoutesParams = {
  Splash: undefined
  Home: undefined
  HomeScreen: undefined
  CarDetails: { car: CarDTO }
  Scheduling: { car: CarDTO }
  SchedulingDetails: { car: CarDTO, dates: string[] }
  Confirmation: {
    title: string
    message: string
    nextScreenRoute: 'Splash' | 'Home' | 'CarDetails' | 'Scheduling' | 'SchedulingDetails' | 'Confirmation' | 'MyCars' | 'SignIn' | 'SignUpFirstStep' | 'SignUpSecondStep'
  }
  MyCars: undefined
  SignIn: undefined
  SignUpFirstStep: undefined
  SignUpSecondStep: { user: { name: string, email: string, driverLicense: string } }
  Profile: undefined
}