import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    getCats() {
        return [{id: 1, name: 'Asya'}]
    }
}
