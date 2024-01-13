import axios from "axios";
import { EducationMdCard } from "components/cards/EducationCard";
import { EducationAddForm } from "components/forms/EducationForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { EducationPage } from "types/education";
import { Props } from "types/page";
import { BASE_URL } from "utils/requests";

export function EducationListByCv({ id: cvId }: Props) {

    const params = useParams();
    const [educationPage, setEducationPage] = useState<EducationPage>({ content: [], number: 0 });

    useEffect(() => {
        axios.get(`${BASE_URL}/education/page/${cvId}`)
            .then(response => {
                setEducationPage(response.data);
            });
    }, [cvId]);


    return (
        <>
            <fieldset>
                <div className="list-group list-group-horizontal">
                    <h2 className="list-group-item">Educação</h2>
                    <div className="list-group-item" data-bs-target="#educationAddModal" data-bs-toggle="modal" >
                        <button className="option-link"><i className="fa fa-file" /> Adicionar</button>
                    </div>
                </div>

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
            <div className="modal fade " id="educationAddModal" role={"dialog"}>
                <div className="modal-dialog modal-lg" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Adicionar</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><EducationAddForm id={`${params.cvId}`} /></div>
                    </div>
                </div>
            </div>
        </>
    );
}