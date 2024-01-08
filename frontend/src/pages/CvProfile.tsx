import { CvProfileCard } from "components/cards/CvCard";
import { useParams } from "react-router-dom";

export function CvProfile() {

    const params = useParams();

    return (
        <>
            <div className="container ">
                <CvProfileCard id={`${params.cvId}`} />
            </div>
        </>
    );
}