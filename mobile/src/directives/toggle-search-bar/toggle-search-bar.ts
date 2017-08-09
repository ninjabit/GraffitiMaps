import {Directive, HostListener} from '@angular/core';

/**
 * Generated class for the ToggleSearchBarDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[toggle-search-bar]' // Attribute selector
})
export class ToggleSearchBarDirective {

  constructor(searchingStatus: boolean) {
    this.searching = searchingStatus;
  }

  searching: boolean = false;

  @HostListener('click') onClickEvent() {
    this.searching = !this.searching;
  }

}
