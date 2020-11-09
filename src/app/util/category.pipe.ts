import { Pipe, PipeTransform } from '@angular/core';
import { APIService, GetCategoryQuery } from '../API.service';

@Pipe({
    name: 'category'
})
export class CategoryPipe implements PipeTransform {
  categoryName: string;
    constructor(public api: APIService) {
    }

    async transform(categoryID: string): Promise<any> {
        const response = await this.api.GetCategory(categoryID);
        return this.categoryName = (response as any).data.name;
    }
}
