import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { CreatePublisherDTO, UpdatePublisherDTO } from './dto/create-publisher.dto';
import { PublisherService } from './publisher.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('publisher')
@Controller('publisher')
export class PublisherController {
    constructor(private publisherService: PublisherService) { }

    // add
    @Post('')
    async create(@Res() res, @Body() createDTO: CreatePublisherDTO) {
        const publisher = await this.publisherService.add(createDTO);
        return res.status(HttpStatus.OK).json({
            message: "publisher has been created successfully",
            publisher
        })
    }

    // get all
    @Get('')
    async getAll(@Res() res) {
        const publishers = await this.publisherService.getAll();
        return res.status(HttpStatus.OK).json(publishers);
    }

    // get detail by id
    @Get('/:id')
    async getOne(@Res() res, @Param('id') id) {
        const publisher = await this.publisherService.getDetail(id);
        if (!publisher) throw new NotFoundException('publisher does not exist!');
        return res.status(HttpStatus.OK).json(publisher);
    }

    // update by id
    @Post('/:id')
    async update(@Res() res, @Param('id') id, @Body() createDTO: UpdatePublisherDTO) {
        const publisher = await this.publisherService.update(id, createDTO);
        if (!publisher) throw new NotFoundException('publisher does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'createDTO has been successfully updated',
            publisher
        });
    }

    // delete by id
    @Delete('/:id')
    async delete(@Res() res, @Param('id') id) {
        const publisher = await this.publisherService.delete(id);
        if (!publisher) throw new NotFoundException('publisher does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'publisher has been deleted',
            publisher
        })
    }

}
