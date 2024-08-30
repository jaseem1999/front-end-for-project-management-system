import { ProjectManager } from "./project-manager";

export class TeamDTO {
    
    tid: number = 0;
    name: string = "";
    position: string = "";
    email: string = "";
    password: string = "";
    phone: number = 0;
    status: string = "";
    active: string = "";
    img: string = ""; 
    pm: ProjectManager | null = null;
    hiddenStatus = true;
}
