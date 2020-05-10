import { Pipe, PipeTransform } from '@angular/core';
// import { filter, toArray, concatAll, tap } from 'rxjs/operators';
import { MovieModel } from 'src/app/models/movie.model';
@Pipe({
    name: 'byYear',
    pure: true
})
export class CustomFilterPipe implements PipeTransform {
    transform(items: any, filterOn: number ): any {
        if (!items || !filterOn) {
            return items;
        }
        return items.filter( (x: MovieModel) => x.year >= filterOn && x.year <= ( filterOn + 10));
    }
}
