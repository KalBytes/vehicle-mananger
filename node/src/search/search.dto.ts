import { IsNotEmpty } from "class-validator";
import { SearchQuery } from "./types/search-query";

export class SearchQueryDTO implements SearchQuery {
  @IsNotEmpty({ message: "entity is required" })
  entity: string;
  @IsNotEmpty({ message: "field is required" })
  field: string;
  @IsNotEmpty({ message: "value is required" })
  value: string;
}
