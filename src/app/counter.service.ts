export class CounterService {
  activeToInactiveCounter = 0;
  inActiveToActiveCounter = 0;
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Active to Inactice" + this.activeToInactiveCounter);
  }
  incrementInactiveToActive() {
    this.inActiveToActiveCounter++;
    console.log("Inactive to Active" + this.inActiveToActiveCounter);
  }
}
// now we will inject it to app module which makes it available on the app lable (including other services too..).
// For use a global service(the service passed in providers bracket in the app module) in another service all we have to do is add a @injectable() decorator in the receiving sevice ts file , for ex we have to use this counter service in users service so we will add @injectable() to user service ts file