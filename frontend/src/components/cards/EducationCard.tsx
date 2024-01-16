import { EducationProps } from "types/education";
import moment from "moment";

export function EducationMdCard({ education }: EducationProps) {
    return (
        <div className="card">
            <div className="card-header">{education?.course} </div>
            <ul className="list-group">
                {education.institution == null ? "" :
                    <li className="list-group-item"><b>Instituição: </b> {education?.institution}</li>
                }
                {education.academicDegree == null ? "" :
                    <li className="list-group-item"> <b>Grau Acadêmico: </b>{education?.academicDegree}</li>
                }
                {education.status == null ? "" :
                    <li className="list-group-item"><b>Situação: </b>{education?.status}</li>
                }
                {education.startDate == null ? "" :
                    <li className="list-group-item"><b>Iniciado em: </b> {moment(education?.startDate).format("DD/MM/yyyy")}</li>
                }
                {education.endDate == null ? "" :
                    <li className="list-group-item"><b>Finalizado em: </b>{moment(education?.endDate).format("DD/MM/yyyy")}</li>
                }
            </ul>
        </div>
    );
}