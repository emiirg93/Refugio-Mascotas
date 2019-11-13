import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalizado"
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    let valueToLow = value.toLowerCase();

    let valueToLowArr = valueToLow.split(" ");

    if (todas) {
      for (let i in valueToLowArr) {
        valueToLowArr[i] =
          valueToLowArr[i][0].toUpperCase() + valueToLowArr[i].substr(1);
      }
    } else {
      valueToLowArr[0] =
        valueToLowArr[0][0].toUpperCase() + valueToLowArr[0].substr(1);
    }

    return valueToLowArr.join(" ");
  }
}
