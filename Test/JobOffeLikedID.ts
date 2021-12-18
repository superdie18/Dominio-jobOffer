import { likedIdEmpty } from "../Domain/JobOffer/Errors/ErrorLikedId";
import { ID } from "../Domain/JobOffer/ValueObjects/JobOfferLikeId";
import {randomUUID} from "crypto";

describe('Value Object likeID', () =>{
	test('Should return a error: likeIDEmpty',() =>{
		const id: any = null;
		expect(() => new ID(id)).toThrowError(new likedIdEmpty())
	})
	test('Should return a error: likeIDEmpty',() =>{
		const id: any = undefined
		expect(() => new ID(id)).toThrowError(new likedIdEmpty())
	})
/*	test('Should return a correct UserID',() =>{
		expect(new ID(randomUUID())).toBeInstanceOf()
	})*/
})

