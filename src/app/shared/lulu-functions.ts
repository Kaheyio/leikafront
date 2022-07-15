export class LuluFormatFunctions {

  static formatAmount(num: any) {
    const formatedamount = String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ');
    return formatedamount;
  }

}