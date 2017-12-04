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