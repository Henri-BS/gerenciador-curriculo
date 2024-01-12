import { ExperienceProps } from "types/experience";

export function ExperienceMdCard({experience}: ExperienceProps){
    return(
        <div className="card-md-container shadow-box">
            <h3 className="card-md-title">{experience?.jobTitle} - {experience?.workingDay} </h3>
            <div className="card-sm-box">
                <h6 className="card-md-item">{experience?.company}</h6>
                <div className="card-md-item">
                    <h6>{experience.startDate} - {experience.endDate}</h6>
                </div>
            </div>
        </div>
    );
}