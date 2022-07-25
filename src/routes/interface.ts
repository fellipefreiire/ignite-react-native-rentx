import { Car } from "../databases/watermelon/models/Car"

export type IRoutesParams = {
  Splash: undefined
  Home: undefined
  HomeScreen: undefined
  CarDetails: { car: Car }
  Scheduling: { car: Car }
  SchedulingDetails: { car: Car, dates: string[] }
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