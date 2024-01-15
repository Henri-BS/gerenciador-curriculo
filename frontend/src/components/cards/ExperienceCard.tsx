import { ExperienceProps } from "types/experience";

export function ExperienceMdCard({ experience }: ExperienceProps) {
    return (
        <div className="card rounded">
            <div className="card-header">{experience?.jobTitle}</div>
            <ul className="list-group">
                <li className="list-group-item">{experience?.company}</li>
                <li className="list-group-item">{experience?.workingDay}</li>
                {experience.startDate == null ? "" :
                    <li className="list-group-item"> {experience?.startDate}</li>
                }
                {experience.endDate == null ? "" :
                    <li className="list-group-item">{experience?.endDate}</li>
                }
            </ul>
        </div>
    );
}