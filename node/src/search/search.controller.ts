import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { SearchService } from "./search.service";
import { SearchQueryDTO } from "./search.dto";

@Controller("search")
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  // Search user via query params
  @Get("")
  @UsePipes(ValidationPipe)
  public async searchUser(@Query() query: SearchQueryDTO): Promise<any[]> {
    return this.searchService.searchInEntities(query);
  }
}
