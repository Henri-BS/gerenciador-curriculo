import axios from "axios";
import { ExperienceMdCard } from "components/cards/ExperienceCard";
import { ExperienceAddForm } from "components/forms/ExperienceForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ExperiencePage } from "types/experience";
import { Props } from "types/page";
import { BASE_URL } from "utils/requests";

export function ExperienceListByCv({ id: cvId }: Props) {
    const params = useParams();
    const [experiencePage, setExperiencePage] = useState<ExperiencePage>({ content: [], number: 0 });

    useEffect(() => {
        axios.get(`${BASE_URL}/experience/page/${cvId}`)
            .then(response => {
                setExperiencePage(response.data);
            });
    }, [cvId]);


    return (
        <>
            <div className="d-flex justify-content-start">
                <h2> Experiência </h2>
                <div data-bs-target="#experienceAddModal" data-bs-toggle="modal" data-placement="top" title="Adicionar" >
                    <button className="option-link-sec"> <i className="fa fa-plus" /></button>
                </div>
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
            <div className="modal fade " id="experienceAddModal" role={"dialog"}>
                <div className="modal-dialog modal-lg" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Adicionar nova experiência de trabalho</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ExperienceAddForm id={`${params.cvId}`} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}