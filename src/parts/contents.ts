// import { Conf } from "../core/conf";
import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {

  private _item: Array<Item> = []

  constructor(opt:any) {
    super(opt)

    this.qsAll('.js-link').forEach((el:HTMLElement, i:number) => {
      this._item.push(new Item({
        el: el,
        key: i,
      }))
    })
  }
}