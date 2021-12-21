import { likedIdEmpty } from "../Domain/JobOffer/Errors/ErrorLikedId";
import JobOfferLikedId from "../Domain/JobOffer/ValueObjects/JobOfferLikeId";
import UniqueId from "../shared/Domain/UniqueUUID";


describe('Value Object likeID', () =>{
	test('Should return a error: likeIDEmpty',() =>{
		const id: any = null;
		expect(() => JobOfferLikedId.create(id)).toThrowError('El id de JobOfferLike no puede estar vacio');
	})
	test('Should return a error: likeIDEmpty',() =>{
		const id: any = undefined;
		expect(() => JobOfferLikedId.create(id)).toThrowError('El id de JobOfferLike no puede estar vacio');
	})
	test('Should return error structure',() =>{
		const id: any = '';
		expect(() => JobOfferLikedId.create(id)).toThrowError('El id de JobOfferLike no posee la estructura correcta');
	})
	test('Should return error structure',() =>{
		const id: any = '          ';
		expect(() => JobOfferLikedId.create(id)).toThrowError('El id de JobOfferLike no posee la estructura correcta');
	})
	test('Should return error structure uuid',() =>{
		const id: string = "a24a6ea4-ce75-4665-a070"; // Correct structure "a24a6ea4-ce75-4665-a070-57453082c256"
		expect(() => JobOfferLikedId.create(id)).toThrowError('El id de JobOfferLike no posee la estructura correcta');
	})
	test('Should return the happy path',() =>{
		const id = new UniqueId().getId(); // structure uuid "a24a6ea4-ce75-4665-a070-57453082c256"
		const JobOfferLikedIdnew = JobOfferLikedId.create(id);
		const isobOfferLikedId = JobOfferLikedIdnew  instanceof JobOfferLikedId; 
		expect(JobOfferLikedId.create(id)).toBeInstanceOf(JobOfferLikedId);
		expect(isobOfferLikedId).toBe(true)
	})
})

