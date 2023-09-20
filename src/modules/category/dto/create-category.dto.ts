import { PartialType } from "@nestjs/swagger";

export class CreateCategoryDTO {
    name: string;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) { }