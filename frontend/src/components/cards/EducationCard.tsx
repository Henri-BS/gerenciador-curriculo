import { EducationProps } from "types/education";

export function EducationMdCard({ education }: EducationProps) {
    return (
        <div className="card rounded">
            <div className="card-header">{education?.course} </div>
            <ul className="list-group">
                {education.institution == null ? "" :
                    <li className="list-group-item"> {education.institution}</li>
                }
                {education.academicDegree == null ? "" :
                    <li className="list-group-item"> {education.academicDegree}</li>
                }
                {education.status == null ? "" :
                    <li className="list-group-item">{education.status}</li>
                }
                {education.startDate == null ? "" :
                    <li className="list-group-item"> {education?.startDate}</li>
                }
                {education.endDate == null ? "" :
                    <li className="list-group-item">{education?.endDate}</li>
                }
            </ul>
        </div>
    );

}