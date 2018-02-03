export class Convo {
    Hanzi:string;
    Pinyin:string;
    English:string;
    Flag:boolean; 
}

export class Word {
    Hanzi:string;
    Pinyin:string;
    Definition:string; 
    Isnew:boolean;
}

export class Lesson {
    Conversation:Convo[];
    Words:Word[];
    Lesson:number;
}


