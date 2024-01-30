import axios from "axios";
import { ExperienceEditForm } from "components/forms/ExperienceForm";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Experience, ExperienceProps } from "types/experience";
import { BASE_URL } from "utils/requests";

export function ExperienceMdCard({ experience }: ExperienceProps) {

    const navigate = useNavigate();

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
                navigate(0);
            })
    }

    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5 data-placement="top" title={experience.jobTitle}>{experience?.jobTitle}</h5>
                    <div className="d-flex">
                        <i className="fa fa-edit option-link-sec" data-bs-target="#experienceEditModal" data-bs-toggle="modal" data-placement="top" title="Editar" />
                        <i className="fa fa-trash option-link-sec" data-bs-target="#experienceDeleteModal" data-bs-toggle="modal" data-placement="top" title="Deletar" />
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item" data-placement="top" title={experience.company}><b>Empresa:</b> {experience?.company}</li>
                    <li className="list-group-item"><b>Jornada:</b> {experience?.workingDay}</li>
                    {experience.startDate == null ? "" :
                        <li className="list-group-item"><b>Iniciado em:</b> {moment(experience?.startDate).format("MM/yyyy")}</li>
                    }
                    {experience.endDate == null ? "" :
                        <li className="list-group-item"><b>Finalizado em:</b> {moment(experience?.endDate).format("MM/yyyy")}</li>
                    }
                </ul>
            </div>
            <div className="modal fade" id="experienceEditModal" role={"dialog"}>
                <div className="modal-dialog modal-lg" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Editar Item </label>
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

