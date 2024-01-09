import { EducationProps } from "types/EducationTypes";

export function EducationMdCard({education}: EducationProps){
    return(
        <div className="card-md-container shadow-box">
            <h3 className="card-md-title">{education?.academicDegree} em {education?.course} ({education?.status}) </h3>
            <div className="card-sm-box">
                <h6 className="card-md-item">{education?.institution}</h6>
                <div className="card-md-item">
                    <h6>{education.startDate} - {education.endDate}</h6>
                </div>
            </div>
        </div>
    );

}