class Items {
    quantity: number;
    book: string;
}

export class CreateOrderDTO {
    customerName: string;
    customerPhoneNumber: string;
    items: Items[];
    totalPrice: number;
}

export class UpdateOrderDTO extends CreateOrderDTO { }