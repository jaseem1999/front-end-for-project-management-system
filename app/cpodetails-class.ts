import { CPOLoginDTO } from "./cpologin-dto";

export class CPODetailsClass {
    id: number = 0;
    name: string = '';
    position: string = '';
    message: string = '';
    img: string = '';
    cpo: CPOLoginDTO = new CPOLoginDTO();
}
