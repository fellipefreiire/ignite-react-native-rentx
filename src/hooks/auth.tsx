import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import { database } from '../databases/watermelon'
import { User } from '../databases/watermelon/models/User'
import { api } from '../services/api'

interface IUser {
  id: string
  user_id: string
  email: string
  name: string
  driver_license: string
  avatar: string
  token: string
}

interface ISignInCredentials {
  email: string
  password: string
}

interface IAuthContextData {
  user: IUser
  signIn: (credentials: ISignInCredentials) => Promise<void>
  signOut: () => Promise<void>
  updateUser: (user: IUser) => Promise<void>
}

interface IAuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [data, setData] = useState<IUser>({} as IUser)

  async function signIn({ email, password }: ISignInCredentials) {
    try {
      const response = await api.post('/sessions', {
        email,
        password
      })

      const { token, user } = response.data

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      const userCollection = database.get<User>('users')
      await database.write(async () => {
        await userCollection.create((newUser) => {
          newUser.user_id = user.id,
            newUser.name = user.name,
            newUser.email = user.email,
            newUser.driver_license = user.driver_license,
            newUser.avatar = user.avatar,
            newUser.token = token
        })
      })

      setData({ ...user, token })
    } catch (err) {
      throw err
    }
  }

  async function signOut() {
    try {
      const userCollection = database.get<User>('users')
      await database.write(async () => {
        const userSelected = await userCollection.find(data.id)
        await userSelected.destroyPermanently()
      })

      setData({} as User)
    } catch (err) {
      throw err
    }
  }

  async function updateUser(user: IUser) {
    try {
      const userCollection = database.get<User>('users')
      await database.write(async () => {
        const userSelected = await userCollection.find(user.id)
        await userSelected.update((userData) => {
          userData.name = user.name,
          userData.driver_license = user.driver_license,
          userData.avatar = user.avatar
        })
      })

      setData(user)
    }
    catch (err) {
      throw err
    }
  }

  useEffect(() => {
    async function loadUserData() {
      const userCollection = database.get<User>('users')
      const response = await userCollection.query().fetch()

      if (response.length > 0) {
        const userData = response[0]._raw as unknown as User
        api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`
        setData(userData)
      }

    }
    loadUserData()
  })

  return (
    <AuthContext.Provider value={{ user: data, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}