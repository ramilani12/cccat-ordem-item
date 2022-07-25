export default class  CodeOrderGenerator {
    static generate(date : Date , sequence : number){
        const year = date.getFullYear();
        return `${year}${new String(sequence).padStart(8,"0")}`
    }
}