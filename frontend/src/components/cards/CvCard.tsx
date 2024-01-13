import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Cv, CvProps } from "types/cv";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";
import { Props } from "types/page";
import { CvEditForm } from "components/forms/CvForm";

export function CvCard({ cv }: CvProps) {
    const params = useParams();

    return (
        <>
            <Link to={`/cv/${cv.id}`} className="text-decoration-none">
                <div className="card-md-container shadow-box">
                    <nav className="card-md-title">
                        <h3>{cv.name}</h3>
                        <img src={cv.image} alt="cv-image" />
                    </nav>
                    <ul className="card-md-list">
                        <li className="card-md-item "><i className="fa fa-phone"/>
                            <p className="card-md-content">{cv.phone}</p>
                        </li>
                        <li className="card-md-item "><i className="fa fa-envelope"/>
                            <p className="card-md-content">{cv.email}</p>
                        </li>
                        <li className="card-md-item"><i className="fa fa-map-marker"/>
                            <p className="card-md-content">{cv.location}</p>
                        </li>
                    </ul>
                </div>
            </Link>
        </>
    );
}

export function CvProfileCard({ id: cvId }: Props) {

    const navigate = useNavigate();
    const params = useParams();

    const [cv, setCv] = useState<Cv>();
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/${cvId}`)
            .then((response) => {
                setCv(response.data);
            })
    }, [cvId]);

    const deleteCv = () => {
        axios.delete(`${BASE_URL}/cv/delete/${cvId}`)
            .then((response) => {
                navigate("/");
            })
    }

    return (
        <>
         
 <div className="list-group-horizontal">
    <Link className="option-link" to={`/`}>
    <i className="fa fa-home"/>
    </Link>
                <button className="option-link" data-bs-target="#cvEditModal" data-bs-toggle="modal">
                    <i className="fa fa-edit" /> Editar Currículo
                </button>
                <button className="option-link " data-bs-target="#cvDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar Currículo
                </button>
            </div>
            <nav className="card-lg-container">
                <img className="card-lg-img" src={cv?.image} />
                <li className="card-lg-item">
                    <h1 >{cv?.name}</h1>
                </li>
                <li className="card-lg-item"><i className="fa fa-phone" />
                    <p className="card-lg-content">{cv?.phone}</p>
                </li>
                <li className="card-lg-item"><i className="fa fa-envelope" />
                    <p className="card-lg-content">{cv?.email}</p>
                </li>
                <li className="card-lg-item"> <i className="fa fa-map-marker" />
                    <p className="card-lg-content">{cv?.location}</p>
                </li>
            </nav>

            <span>{cv?.description}</span>
           
            <hr />
            <div className="modal fade" id="cvEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Editar</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><CvEditForm id={`${params.cvId}`} /></div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="cvDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Deseja deletar este currículo ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => deleteCv()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}