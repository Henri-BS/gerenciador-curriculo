import { Education, EducationProps } from "types/education";
import moment from "moment";
import { EducationEditForm } from "components/forms/EducationForm";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function EducationMdCard({ education }: EducationProps) {

    const navigate = useNavigate();
    const [, setEducation] = useState<Education>();
    useEffect(() => {
        axios.get(`${BASE_URL}/education/${education.id}`)
            .then((response) => {
                setEducation(response.data);
            })
    }, [education.id]);

    const deleteEducation = () => {
        axios.delete(`${BASE_URL}/education/delete/${education.id}`)
            .then((response) => {
     navigate(0);
            })
    }

    return (
        <>
        <div className="card">
            <div className="card-header d-flex justify-content-between">
                <h5 data-placement="top" title={education.course}>{education?.course}</h5>
                <div className="d-flex">
                    <i className="fa fa-edit option-link-sec" data-bs-dismiss="modal" data-bs-target="#educationEditModal" data-bs-toggle="modal" data-placement="top" title="Editar" />
                    <i className="fa fa-trash option-link-sec" data-bs-dismiss="modal" data-bs-target="#educationDeleteModal" data-bs-toggle="modal" data-placement="top" title="Deletar" />
                </div>
            </div>
            <ul className="list-group">
                {education.institution == null ? "" :
                    <li className="list-group-item" data-placement="top" title={education.institution}><b>Instituição: </b> {education?.institution}</li>
                }
                {education.academicDegree == null ? "" :
                    <li className="list-group-item"> <b>Grau Acadêmico: </b>{education?.academicDegree}</li>
                }
                {education.status == null ? "" :
                    <li className="list-group-item"><b>Situação: </b>{education?.status}</li>
                }
                {education.startDate == null ? "" :
                    <li className="list-group-item"><b>Iniciado em: </b> {moment(education?.startDate).format("DD/MM/yyyy")}</li>
                }
                {education.endDate == null ? "" :
                    <li className="list-group-item"><b>Finalizado em: </b>{moment(education?.endDate).format("DD/MM/yyyy")}</li>
                }
            </ul>
        </div>

<div className="modal fade" id="educationEditModal" role={"dialog"}>
<div className="modal-dialog" role={"document"}>
    <div className="modal-content">
        <div className="modal-header">
            <label className="modal-title">Editar item </label>
            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fa fa-times" /></span>
            </button>
        </div>
        <div className="modal-body"><EducationEditForm id={`${education?.id}`} /></div>
    </div>
</div>
</div>
<div className="modal fade" id="educationDeleteModal" role={"dialog"}>
<div className="modal-dialog" role={"document"}>
    <div className="modal-content">
        <div className="modal-header">
            <label className="modal-title">Deseja deletar este item ?</label>
            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i className="fa fa-times" /></span>
            </button>
        </div>
        <div className="modal-footer">
            <button onClick={() => deleteEducation()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
        </div>
    </div>
</div>
</div>
</>
    );
}