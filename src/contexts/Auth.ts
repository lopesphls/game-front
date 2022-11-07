import { createContext } from 'react'
import { Authentication } from '../entities/UserEntities'

export const AppContext = createContext<Authentication>(null)
