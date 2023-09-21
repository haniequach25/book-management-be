import { PartialType } from "@nestjs/swagger";

export class CreateAuthorDTO {
    firstName: string;
    lastName: string;
    dob: Date;
    created_at: Date;
    description?: string;
}

export class UpdateAuthorDTO extends PartialType(CreateAuthorDTO) { }