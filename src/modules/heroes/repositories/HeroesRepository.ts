import { AppDataSource } from '../../../data-source'
import { Heroes } from '../entities/Heroes'

export const heroesRepository = AppDataSource.getRepository(Heroes)
