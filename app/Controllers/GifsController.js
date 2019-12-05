import GifsService from "../Services/GifsService.js";
import store from "../store";

//Private
function _draw() {
  let gifs = store.State.gifs;
  console.log(gifs);
}

//Public
export default class GifsController {
  constructor() {
    store.subscribe("gifs", _draw);
  }
}
