import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {User} from "api/models/user";

@Injectable()
export class UserService {
  currentUser$ = new BehaviorSubject<User>(null);
  currentUserId: string;

  constructor() {}

  subscribeCurrentUser() {
    // this.subscribe('users.currentUser', () => {
    //   this.autorun(() => {
    //     this.currentUser$.next(<User>Meteor.user());
    //     this.currentUserId = Meteor.userId();
    //   });
    // })
  }

  // _initAutorun(): void {
  //   this.autorunComputation = Tracker.autorun(() => {
  //     this.zone.run(() => {
  //       this.currentUser = Meteor.user();
  //       this.currentUserId = Meteor.userId();
  //       this.isLoggingIn = Meteor.loggingIn();
  //       this.isLoggedIn = !!Meteor.user();
  //     })
  //   });
  // }

}
