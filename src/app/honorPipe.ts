import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name : 'honor'})
export class HonorPipe implements PipeTransform {
    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }
    transform(value: string): string {
        return `${value}님`;
    }
}
