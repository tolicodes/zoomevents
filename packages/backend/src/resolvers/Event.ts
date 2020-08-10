import { Resolver, Query } from "type-graphql";
import Event from "../entity/Event";

@Resolver(Event)
export default class EventResolver {
  @Query((returns) => [Event])
  async events() {
    return Event.find();
  }
}
