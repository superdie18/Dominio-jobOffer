import { Entity } from "../../../shared/domain/Entity";
import IDomainEvent from "../../../shared/domain/IDomainEvent";
import { JobOfferLike } from "./JobOfferLike";

export default class jobOffer<S extends OfferStatus> extends Entity{
  private eventRecorder: IDomainEvent[] = [];
  public status: S;
    //private _id: string;
    //private title: string;
    //private dataRange: Date;
    //private description: string;
    //private salary: number;
    //private skills: string;
    //private vacants: number;
    
    //private ispublished:boolean;
    //private isSuspended: boolean;
    //private complaints: string;

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


/*	constructor(id: string, title: string, dataRange: Date, description: string, salary: number, skills: string, 
        vacants: number, ispublished: boolean, isSuspended: boolean, complaints: string, _likes:JobOfferLike) {
		this._id = id;
		this.title = title;
		this.dataRange = dataRange;
		this.description = description;
		this.salary = salary;
		this.skills = skills;
		this.vacants = vacants;
		this.ispublished = ispublished;
		this.isSuspended = isSuspended;
		this.complaints = complaints;
	}*/

  /*  public get likes(): JobOfferLike {
      return this._likes;
      }

    public set likes(value: JobOfferLike) {
      this._likes = value;
    }
*/
//Nota: Recuerda revisar porque obligatoriamente se necesita que el !
      
}

