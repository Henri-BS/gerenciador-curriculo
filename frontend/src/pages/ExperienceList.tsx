import axios from "axios";
import { ExperienceMdCard } from "components/cards/ExperienceCard";
import { useEffect, useState } from "react";
import { ExperiencePage } from "types/experience";
import { Props } from "types/page";
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
            <fieldset>
                    <legend><h2>Experiência</h2></legend>
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