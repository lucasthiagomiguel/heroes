import { Router } from 'express';
import UsersController  from '../controllers/UsersController';
import isAuthenticated from '../../../shared/middlewere/isAuthenticated'


const usersRouter = Router();
const usersController = new UsersController();



usersRouter.post(
  '/',
  isAuthenticated,
  usersController.create,
);



export default usersRouter;
