import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Cv, CvProps, Props } from "types/CvTypes";
import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "utils/requests";

export function CvCard({cv}: CvProps){
    const params = useParams();

    return (
        <>
            <Link to={`/cv/${cv.id}`} >
                <div className="card-md-container shadow-box">
                    <nav className="card-md-title">
                        <h3>{cv.name}</h3>
                        <img src={cv.image} alt="cv-image"/>
                    </nav>
                    <ul className="card-md-list">
                        <li className="card-md-item ">Celular: 
                        <p className="card-md-content">{cv.phone}</p>
                        </li>
                        <li className="card-md-item ">Email: 
                        <p className="card-md-content">{cv.email}</p>
                        </li>
                        <li className="card-md-item">Localidade: 
                        <p className="card-md-content">{cv.location}</p>
                        </li>
                    </ul>
                </div>
            </Link>

            <div className="modal fade" id="optionModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Menu de opções </label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <hr />
                        <ul className="modal-body md-card-list">
                            <li className="card-md-content link-option" data-bs-target="#clientEditModal" data-bs-toggle="modal">
                                <i className="fa fa-edit" /> Editar Cliente
                            </li>

                            <li className="card-md-content link-option">
                                <i className="fa fa-trash" /> Deletar Cliente
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="clientEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Editar cliente</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function CvProfileCard({id: cvId }: Props) {

    const navigate = useNavigate();
    const params = useParams();

    const [client, setClient] = useState<Cv>();
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/${cvId}`)
            .then((response) => {
                setClient(response.data);
            })
    }, [cvId]);

    const deleteCv = () => {
        axios.delete(`${BASE_URL}/client/delete/${cvId}`)
            .then((response) => {
                navigate("/client-list");
            })
    }

    return (
        <>
            <div className="sub-navbar">
                <button className="btn btn-primary" data-bs-target="#cvEditModal" data-bs-toggle="modal">
                    <i className="fa fa-edit" /> Editar Currículo
                </button>
                <button className="btn btn-danger" data-bs-target="#cvDeleteModal" data-bs-toggle="modal">
                    <i className="fa fa-trash" /> Deletar Currículo
                </button>
            </div>
            <hr />

            <nav className="card-lg-container">
                <li className="card-lg-item">Nome:
                    <p className="card-lg-content">{client?.name}</p>
                </li>
                <li className="card-lg-item">Endereço:
                    <p className="card-lg-content">{client?.phone}</p>
                </li>
                <li className="card-lg-item">Email:
                    <p className="card-lg-content">{client?.email}</p>
                </li>
                <li className="card-lg-item">Localidade:
                    <p className="card-lg-content">{client?.location}</p>
                </li>
            </nav>

            <div className="modal fade" id="cvEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Editar</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"></div>
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