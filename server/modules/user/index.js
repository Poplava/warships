import express from 'express';
import UserController from './UserController';

export var router = express.Router();

router.post('/', UserController.register);
router.get('/:id', UserController.get);

