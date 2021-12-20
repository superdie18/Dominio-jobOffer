import { Entity } from "../../../shared/Domain/Entity";
import IDomainEvent from "../../../shared/Domain/IDomainEvent";
import { JobOfferLike } from "./JobOfferLike";

export default class jobOffer<S extends OfferStatus> extends Entity{
  private eventRecorder: IDomainEvent[] = [];
  public status: S;
  
  constructor(
    public  likes: JobOfferLike, 
    status: S)
  {
    super();    
    this.status =  status;
  }    
  
  public getEvents(){
    return this.eventRecorder;
  }
  public addEvent(domainEvent: IDomainEvent){
    this.eventRecorder.push(domainEvent);
  }
}

