import axios from "axios";
import { ExperienceEditForm } from "components/forms/ExperienceForm";
import moment from "moment";
import { useEffect, useState } from "react";
import { Experience, ExperienceProps } from "types/experience";
import { BASE_URL } from "utils/requests";

export function ExperienceMdCard({ experience }: ExperienceProps) {

const [, setExperience] = useState<Experience>();
        useEffect(() => {
            axios.get(`${BASE_URL}/experience/${experience.id}`)
                .then((response) => {
                    setExperience(response.data);
                })
        }, [experience.id]);

        const deleteExperience = () => {
            axios.delete(`${BASE_URL}/experience/delete/${experience.id}`)
                .then((response) => {
         
                })
        }

    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    {experience?.jobTitle}
                    <div>
                        <i className="fa fa-edit option-link-sec" data-bs-dismiss="modal" data-bs-target="#experienceMenuModal" data-bs-toggle="modal" data-placement="top" title="Editar"/>
                        <i className="fa fa-trash option-link-sec" data-bs-dismiss="modal" data-bs-target="#experienceDeleteModal" data-bs-toggle="modal" data-placement="top" title="Deletar" />
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">{experience?.company}</li>
                    <li className="list-group-item">{experience?.workingDay}</li>
                    {experience.startDate == null ? "" :
                        <li className="list-group-item"> {moment(experience?.startDate).format("MM/yyyy")}</li>
                    }
                    {experience.endDate == null ? "" :
                        <li className="list-group-item">{moment(experience?.endDate).format("MM/yyyy")}</li>
                    }
                </ul>
            </div>
            <div className="modal fade" id="experienceMenuModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Menu de Opções </label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ExperienceEditForm id={`${experience?.id}`} /></div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="experienceDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Deseja deletar este item ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => deleteExperience()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

