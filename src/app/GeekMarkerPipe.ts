import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name : 'geekMark'})
export class GeekMarkerPipe implements PipeTransform {
    // transform(value: any, ...args: any[]) {
    //     throw new Error("Method not implemented.");
    // }
    transform(value: string, level: string): string {
        switch (level) {
            case 'A' :
                return `Oh Geek! ${value}`;
            case 'I' :
                return `Good man, ${value}`;
            default :
                return `Novice ${value}`;
        }
    }
}
