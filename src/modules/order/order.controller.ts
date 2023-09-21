import { Controller, Get, Res, HttpStatus, Post, Body, Put, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDTO, UpdateOrderDTO } from './dto/create-order.dto';
import { SearchFilter } from 'src/common/dto/search-filter.dto';

@ApiTags('order')
@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) { }

    // add
    @Post('')
    async create(@Res() res, @Body() createDTO: CreateOrderDTO) {
        const order = await this.orderService.add(createDTO);
        return res.status(HttpStatus.OK).json({
            message: "order has been created successfully",
            order
        })
    }

    // get all
    @Get('')
    async getAll(@Res() res, @Query() filter: SearchFilter) {
        const orders = await this.orderService.getAll(filter);
        return res.status(HttpStatus.OK).json(orders);
    }

    // get detail by id
    @Get('/:id')
    async getOne(@Res() res, @Param('id') id: string) {
        const order = await this.orderService.getDetail(id);
        if (!order) throw new NotFoundException('order does not exist!');
        return res.status(HttpStatus.OK).json(order);
    }

    // update by id
    @Post('/:id')
    async update(@Res() res, @Param('id') id: string, @Body() createDTO: UpdateOrderDTO) {
        const order = await this.orderService.update(id, createDTO);
        if (!order) throw new NotFoundException('order does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'order has been successfully updated',
            order
        });
    }

    // delete by id
    @Delete('/:id')
    async detele(@Res() res, @Param('id') id: string) {
        const order = await this.orderService.delete(id);
        if (!order) throw new NotFoundException('order does not exist');
        return res.status(HttpStatus.OK).json({
            message: 'order has been deleted',
            order
        })
    }

}
