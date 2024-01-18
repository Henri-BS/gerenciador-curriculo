import axios from "axios";
import { ItemEditForm } from "components/forms/ItemForm";
import { SectionEditForm } from "components/forms/SectionForm";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Item, ItemProps, Section, SectionProps } from "types/section";
import { BASE_URL } from "utils/requests";

export function ItemMdCard({ item }: ItemProps) {

    const navigate = useNavigate();

    const [, setExperience] = useState<Item>();
    useEffect(() => {
        axios.get(`${BASE_URL}/item/${item.id}`)
            .then((response) => {
                setExperience(response.data);
            })
    }, [item.id]);

    const deleteItem = () => {
        axios.delete(`${BASE_URL}/item/delete/${item.id}`)
            .then((response) => {
                navigate(0);
            })
    }

    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h5>{item?.name}</h5>
                    <div className="d-flex">
                        <i className="fa fa-edit option-link-sec" data-bs-target="#itemEditModal" data-bs-toggle="modal" data-placement="top" title="Editar" />
                        <i className="fa fa-trash option-link-sec" data-bs-target="#itemDeleteModal" data-bs-toggle="modal" data-placement="top" title="Deletar" />
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item" data-placement="top" title={item.description} ><b>Descrição:</b> {item?.description}</li>
                    {item.startDate == null ? "" :
                        <li className="list-group-item"><b>Iniciado em:</b> {moment(item?.startDate).format("MM/yyyy")}</li>
                    }
                    {item.endDate == null ? "" :
                        <li className="list-group-item"><b>Finalizado em:</b> {moment(item?.endDate).format("MM/yyyy")}</li>
                    }
                </ul>
            </div>

            <div className="modal fade" id="itemEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Editar Item </label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><ItemEditForm id={`${item?.id}`} /></div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="itemDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Deseja deletar este item ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => deleteItem()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export function SectionCard({ section }: SectionProps) {

    const navigate = useNavigate();

    const [, setSection] = useState<Section>();
    useEffect(() => {
        axios.get(`${BASE_URL}/section/${section.id}`)
            .then((response) => {
                setSection(response.data);
            })
    }, [section?.id]);

    const deleteSection = () => {
        axios.delete(`${BASE_URL}/section/delete/${section?.id}`)
            .then((response) => {
                navigate(0);
            })
    }

    return (
        <>
            <div className="d-flex justify-content-start">
                <h2>{section?.title}</h2>
                <button className="btn">
                    <i className="fa fa-plus option-link-sec" data-bs-dismiss="modal" data-bs-target="#itemAddModal" data-bs-toggle="modal" data-placement="top" title="Adicionar Item" />
                </button>
                <button className="btn">
                    <i className="fa fa-edit option-link-sec" data-bs-dismiss="modal" data-bs-target="#sectionEditModal" data-bs-toggle="modal" data-placement="top" title="Editar Seção" />
                </button>
                <button className="btn">
                    <i className="fa fa-trash option-link-sec" data-bs-dismiss="modal" data-bs-target="#sectionDeleteModal" data-bs-toggle="modal" data-placement="top" title="Deletar Seção" />
                </button>
            </div>

            <div className="modal fade" id="sectionEditModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Editar Item </label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><SectionEditForm id={`${section.id}`} /></div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="sectionDeleteModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Deseja deletar este item ?</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => deleteSection()} data-bs-dismiss="modal" className="btn btn-danger" >Deletar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}