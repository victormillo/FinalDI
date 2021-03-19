export class Asignatura{

    constructor(private nombre: string, private profesor: string, private conocimientos: [], private ciclo: string, private curso: number){
        this.nombre = nombre;
        this.profesor = profesor;
        this.conocimientos = conocimientos;
        this.ciclo = ciclo; 
        this.curso = curso; 
    }
}