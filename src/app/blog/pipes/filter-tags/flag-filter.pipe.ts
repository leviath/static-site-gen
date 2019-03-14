import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'flagFilter'
})
export class FlagFilterPipe implements PipeTransform {
    constructor() {
    }

    public transform(items: any[], term: string): any {
        if (!term) {
            return items;
        }

        return items.filter(item => item.flag.indexOf(term) !== -1);
    }
}
