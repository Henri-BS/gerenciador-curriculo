import { CvProfileCard } from "components/cards/CvCard";
import { useParams } from "react-router-dom";
import { EducationListByCv } from "./EducationList";
import { ExperienceListByCv } from "./ExperienceList";
import { SectionListByCv } from "./SectionList";

export function CvProfile() {

    const params = useParams();

    return (
        <>
            <div className="container ">
                <CvProfileCard id={`${params.cvId}`} />
                <EducationListByCv id={`${params.cvId}`}/>
                <ExperienceListByCv id={`${params.cvId}`}/>
                <SectionListByCv id={`${params.cvId}`}/>
            </div>
        </>
    );
}