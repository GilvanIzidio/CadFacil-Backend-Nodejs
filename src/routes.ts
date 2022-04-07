import { Router } from 'express';

import multer from 'multer';
import uploadConfig from './config/upload';

import SchemaCreateClient from './schemas/CreateClient';
import SchemaClientID from './schemas/GetClienteByid';
import SchemaUpdateClient from './schemas/UpdateClient';
import Validate from './middleware/ValidateSchema';

import CreateClientController from './controllers/ClientController/CreateClientController';
import UpdatePhotoClientController from './controllers/ClientController/UpdatePhotoClientController';
import GetAllClientsController from './controllers/ClientController/GetAllClientsController';
import GetClientByIdController from './controllers/ClientController/GetClientByIdController';
import UpdateClientController from './controllers/ClientController/UpdateClientController';
import DeleteClientController from './controllers/ClientController/DeleteClientController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/clients', Validate(SchemaCreateClient, 'body'), new CreateClientController().handle);

routes.patch(
  '/clients/profilePhoto/:id',
  upload.single('file'),
  new UpdatePhotoClientController().handle,
);

routes.get('/clients', new GetAllClientsController().handle);

routes.get(
  '/clients/:id',
  Validate(SchemaClientID, 'params'),
  new GetClientByIdController().handle,
);
routes.put(
  '/clients/:id',
  Validate(SchemaClientID, 'params'),
  Validate(SchemaUpdateClient, 'body'),
  new UpdateClientController().handle,
);
routes.delete(
  '/clients/:id',
  Validate(SchemaClientID, 'params'),
  new DeleteClientController().handle,
);

export { routes };
