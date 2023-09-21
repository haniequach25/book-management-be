export class CreateBookDTO {
    title: string;
    page_number: number;
    price: number;
    published_date: Date;
    author: string;
    category: string;
    publisher: string;
}

export class UpdateBookDTO extends CreateBookDTO { }