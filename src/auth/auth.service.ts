import { Injectable } from '@nestjs/common';

/* Modules */
import { DatabaseService } from 'src/database/database.service';

@Injectable({})
export class AuthService {
  constructor(private databaseService: DatabaseService) {}

  signup() {
    return 'Endpoint: Signup Page';
  }

  signin() {
    return 'Endpoint: Signup Page';
  }
}
