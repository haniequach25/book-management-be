class Items {
    quantity: number;
    book: string;
}

export class CreateOrderDTO {
    customerName: string;
    customerPhoneNumber: string;
    items: Items[];
}

export class UpdateOrderDTO extends CreateOrderDTO { }