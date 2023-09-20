import { PartialType } from "@nestjs/swagger";

export class CreatePublisherDTO {
    name: string;
    address: string;
    phoneNumber: string;
    email: string;
}

export class UpdatePublisherDTO extends PartialType(CreatePublisherDTO) { }