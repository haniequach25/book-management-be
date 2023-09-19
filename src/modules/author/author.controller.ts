import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto/create-author.dto';

@Controller('author')
export class AuthorController {
    constructor(private authorService: AuthorService) { }

    // add
    @Post('')
    async create(@Res() res, @Body() createDTO: CreateAuthorDTO) {
        const author = await this.authorService.add(createDTO);
        return res.status(HttpStatus.OK).json({
            message: "author has been created successfully",
            author
        })
    }

    // get all
    @Get('')
    async getAll(@Res() res) {
        const authors = await this.authorService.getAll();
        return res.status(HttpStatus.OK).json(authors);
    }

    // get detail by id
    @Get('/:id')
    async getOne(@Res() res, @Param('id') id) {
        const author = await this.authorService.getDetail(id);
        if (!author) throw new NotFoundException('author does not exist!');
        return res.status(HttpStatus.OK).json(author);
    }

    // update by id
    @Post('/:id')
    async update(@Res() res, @Param('id') id, @Body() createDTO: CreateAuthorDTO) {
        const author = await this.authorService.update(id, createDTO);
        if (!author) throw new NotFoundException('author does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'author has been successfully updated',
            author
        });
    }

    // delete by id
    @Delete('/:id')
    async detele(@Res() res, @Param('id') id) {
        const author = await this.authorService.delete(id);
        if (!author) throw new NotFoundException('author does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'author has been deleted',
            author
        })
    }

}
