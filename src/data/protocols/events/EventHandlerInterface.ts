import EventInterface from "./EventInterface";

export default interface EventHandlerInterface<T extends EventInterface=EventInterface> {
    handle(event: T): void;
}
