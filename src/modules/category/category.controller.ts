import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { CreateCategoryDTO, UpdateCategoryDTO } from './dto/create-category.dto';
import { CategoryService } from './category.service';
import { ApiTags } from '@nestjs/swagger';
import { SearchFilter } from 'src/common/dto/search-filter.dto';

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    // add
    @Post('')
    async create(@Res() res, @Body() createDTO: CreateCategoryDTO) {
        const category = await this.categoryService.add(createDTO);
        return res.status(HttpStatus.OK).json({
            message: "category has been created successfully",
            category
        })
    }

    // get all
    @Get('')
    async getAll(@Res() res, @Query() filter: SearchFilter) {
        const categories = await this.categoryService.getAll(filter);
        return res.status(HttpStatus.OK).json(categories);
    }

    // get detail by id
    @Get('/:id')
    async getOne(@Res() res, @Param('id') id: string) {
        const category = await this.categoryService.getDetail(id);
        if (!category) throw new NotFoundException('category does not exist!');
        return res.status(HttpStatus.OK).json(category);
    }

    // update by id
    @Post('/:id')
    async update(@Res() res, @Param('id') id: string, @Body() createDTO: UpdateCategoryDTO) {
        const category = await this.categoryService.update(id, createDTO);
        if (!category) throw new NotFoundException('category does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'createDTO has been successfully updated',
            category
        });
    }

    // delete by id
    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string) {
        const category = await this.categoryService.delete(id);
        if (!category) throw new NotFoundException('category does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'category has been deleted',
            category
        })
    }

}
