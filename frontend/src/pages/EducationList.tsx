import axios from "axios";
import { EducationMdCard } from "components/cards/EducationCard";
import { useEffect, useState } from "react";
import { Props } from "types/CvType";
import { EducationPage } from "types/EducationTypes";
import { BASE_URL } from "utils/requests";

export function EducationListByCv({ id: cvId }: Props) {

    const [educationPage, setEducationPage] = useState<EducationPage>({ content: [], number: 0});

    useEffect(() => {
        axios.get(`${BASE_URL}/education/page/${cvId}`)
            .then(response => {
                setEducationPage(response.data);
            });
    }, [cvId]);


    return (
        <>
            <fieldset>
                    <legend><h2>Educação</h2></legend>

                {educationPage.empty ? <h5>Nenhum Item Adicionado</h5> :
                <div className="row">
                    {educationPage.content?.map(education => (
                        <div key={education.cvId} className="col-sm-12 col-lg-6 col-xl-4 mb-3">
                            <EducationMdCard education={education} />
                        </div>
                    ))}
                </div>
}
            </fieldset>
        </>
    );
}