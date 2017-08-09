import {sandboxOf} from "angular-playground";
import {StreamComponent} from "./stream.component";

export default sandboxOf(StreamComponent)
  .add('with example image', {
    template: `<app-stream></app-stream>`
  });
