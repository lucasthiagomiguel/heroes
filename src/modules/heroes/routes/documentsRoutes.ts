import { Router } from 'express';
import HeroesController  from '../controllers/HeroesController';


const heroesRouter = Router();
const heroesController = new HeroesController();



heroesRouter.post(
  '/',
  heroesController.create,
);



export default heroesRouter;