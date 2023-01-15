/**
    * @description      : 
    * @author           : mario
    * @group            : 
    * @created          : 12/01/2023 - 16:27:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 12/01/2023
    * - Author          : mario
    * - Modification    : 
**/

import { Router } from "express";
import GenericController from "../database/controllers/GenericController";
import GuestController from "../database/controllers/EntityController";

const routes = Router();

// Guests
routes.get('/Entities', GuestController.getEntities);
routes.post('/Entities', GuestController.saveEntities);

// Redirect
routes.all('*', GenericController.notFoundMessage);

export default routes;