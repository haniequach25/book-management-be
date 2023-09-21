import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO, UpdateBookDTO } from './dto/create-book.dto';
import { ApiTags } from '@nestjs/swagger';
import { SearchFilter } from 'src/common/dto/search-filter.dto';

@ApiTags('book')
@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    // add
    @Post('')
    async create(@Res() res, @Body() createDTO: CreateBookDTO) {
        const book = await this.bookService.add(createDTO);
        return res.status(HttpStatus.OK).json({
            message: "book has been created successfully",
            book
        })
    }

    // get all
    @Get('')
    async getAll(@Res() res, @Query() filter: SearchFilter) {
        const books = await this.bookService.getAll(filter);
        return res.status(HttpStatus.OK).json(books);
    }

    // get detail by id
    @Get('/:id')
    async getOne(@Res() res, @Param('id') id: string) {
        const book = await this.bookService.getDetail(id);
        if (!book) throw new NotFoundException('book does not exist!');
        return res.status(HttpStatus.OK).json(book);
    }

    // update by id
    @Post('/:id')
    async update(@Res() res, @Param('id') id: string, @Body() createDTO: UpdateBookDTO) {
        const book = await this.bookService.update(id, createDTO);
        if (!book) throw new NotFoundException('book does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'book has been successfully updated',
            book
        });
    }

    // delete by id
    @Delete('/:id')
    async detele(@Res() res, @Param('id') id: string) {
        const book = await this.bookService.delete(id);
        if (!book) throw new NotFoundException('book does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'book has been deleted',
            book
        })
    }

}
