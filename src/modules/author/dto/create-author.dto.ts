import { PartialType } from "@nestjs/swagger";

export class CreateAuthorDTO {
    first_name: string;
    last_name: string;
    dob: Date;
    created_at: Date;
}

export class UpdateAuthorDTO extends PartialType(CreateAuthorDTO) { }