export interface CEDICT  {
	Traditional:string 
	Simplified:string 
	PinyinNumbered:string 
	Pinyin:string 
	Definition:string 
}

export interface CEDICTWITHSIZE {
    Size:number
    Data:CEDICT[]


}

export class Search {
	constructor(){
		this.Page = 0;
		this.PageSize = 0;
		this.Search = "";
	}
	Page:number
	PageSize:number
	Search:string
}