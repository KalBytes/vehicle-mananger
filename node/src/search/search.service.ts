import { Injectable } from "@nestjs/common";
import { getConnection, Like } from "typeorm";
import { SearchQuery } from "./types/search-query";

/**
 * @summary Performing search inside a wanted entities according the query params
 * @param {SearchQuery} searchQuery All the necessary information in order to perform the search
 * @return {Promise<Any[]>} Returns a list of found entries or empty array if no entries found
 */

@Injectable()
export class SearchService {
  constructor() {}

  // Search inside user repository according to search query
  public searchInEntities(searchQuery: SearchQuery): Promise<any[]> {
    return getConnection()
      .getRepository(`${searchQuery.entity}`)
      .find({
        [searchQuery.field]: Like(`%${searchQuery.value}%`)
      });
  }
}
