import { Injectable } from '@nestjs/common';

@Injectable()
export class FotosService {
    private fotos = [
        {
            id: 1,
            url: 'https://media.discordapp.net/attachments/1031376790742122566/1294705432081989653/image.png?ex=670e9ee5&is=670d4d65&hm=32a2369c086df8313d13f97060560290c4dc8cc5d7d028e13018ff7c6c8526eb&=&format=webp&quality=lossless&width=1193&height=671',
            descripcion: 'Sr. Naranja - 12/10/2024'
        },
        {
            id: 2,
            url: 'https://media.discordapp.net/attachments/1031376790742122566/1294697382776143934/image.png?ex=670e9766&is=670d45e6&hm=6e706295cc0829351d3ed6cbd86ebeaf4df4c546f69a40a6001547519f796ae1&=&format=webp&quality=lossless&width=243&height=315',
            descripcion: 'Sr. Naranja - 12/10/2024'
        },
        {
            id: 3,
            url: 'https://media.discordapp.net/attachments/1031376790742122566/1295971442932060262/2024-10-15_23-44-05.png?ex=67113fb5&is=670fee35&hm=f2800f77e7a664be7242fbee2084d5aff2cc79284cc5379f2ce6d0dd68cd95c5&=&format=webp&quality=lossless&width=1193&height=671',
            descripcion: 'Jhon Hernandez - 16/10/2024'
        }
    ];

    getAllFotos() {
        return this.fotos;
    }
}
