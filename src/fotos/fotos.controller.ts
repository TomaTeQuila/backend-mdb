import { Controller, Get } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { get } from 'http';

@Controller('fotos')
export class FotosController {
    constructor(private fotosService: FotosService) {}

    @Get()
    getAllFotos(){
        return this.fotosService.getAllFotos(); 
    }

}
