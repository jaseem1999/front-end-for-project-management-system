import { CPOLoginDTO } from "./cpologin-dto";

export class ProjectDTO {
    tid: number = 0;
    pname: string = "";
    description: string = "";
    startdate: Date | null = null;
    enddate: Date | null = null;

    client: string = "";
    status: string = "";
    

    
    img: string = "";  
    pdf: string = "";  

    cpo: CPOLoginDTO = new CPOLoginDTO();

    selectedStatus: string = this.status;
    
}
