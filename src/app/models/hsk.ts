export interface hsk {
    // hanzi:string;
    // pinyin:string;
    // definition:string;
    // Level:string;
    // flipped:Boolean;
    Traditional:string 
	Simplified:string 
	PinyinNumbered:string 
	Pinyin:string 
	Definition:string 
}

export interface hskWITHSIZE {
    Size:number
    Data:hsk[]

}
