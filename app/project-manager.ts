import { CPOLoginDTO } from "./cpologin-dto";
import { ProjectDTO } from "./project-dto";

export class ProjectManager {
    tid :number = 0;
    name = "";
    email = "";
    password = "";
    phone = 0;
    status = "";
    img = "";
    position = "";
    cpo: CPOLoginDTO = new CPOLoginDTO();
    project: ProjectDTO = new ProjectDTO();
}
