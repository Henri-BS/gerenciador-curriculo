import axios from "axios";
import { EducationMdCard } from "components/cards/EducationCard";
import { ExperienceMdCard } from "components/cards/ExperienceCard";
import { useEffect, useState } from "react";
import { Props } from "types/CvType";
import { ExperiencePage } from "types/ExperienceType";
import { BASE_URL } from "utils/requests";

export function ExperienceListByCv({ id: cvId }: Props) {

    const [experiencePage, setExperiencePage] = useState<ExperiencePage>({ content: [], number: 0 });

    useEffect(() => {
        axios.get(`${BASE_URL}/experience/page/${cvId}`)
            .then(response => {
                setExperiencePage(response.data);
            });
    }, [cvId]);


    return (
        <>
            <fieldset className="container">
                <hr />
                <div className="header-container">
                    <legend><h2>Experiência</h2></legend>
                </div>
                {experiencePage.empty ? <h5>Nenhum Item Adicionado</h5> :
                    <div className="row">
                        {experiencePage.content?.map(experience => (
                            <div key={experience.cvId} className="col-sm-12 col-lg-6 col-xl-4 mb-3">
                                <ExperienceMdCard experience={experience} />
                            </div>
                        ))}
                    </div>
                }
            </fieldset>
        </>
    );
}