import axios from "axios";
import { ItemMdCard } from "components/cards/ItemCard";
import { ItemAddForm } from "components/forms/SectionForm";
import { useState, useEffect } from "react";
import { Props } from "types/page";
import { ItemPage, SectionPage } from "types/section";
import { BASE_URL } from "utils/requests";

export function SectionListByCv({ id: cvId }: Props) {

    const [sectionPage, setSectionPage] = useState<SectionPage>({ content: [], number: 0 });

    useEffect(() => {
        axios.get(`${BASE_URL}/section/page/${cvId}`)
            .then(response => {
                setSectionPage(response.data);
            });
    }, [cvId]);


    return (
        <>
            <hr />

            <div>
                {sectionPage.content?.map(section => (
                    <div key={section.cvId}>
                        <div className="d-flex justify-content-start">
                            <h2>{section?.title}</h2>
                            <div data-bs-target="#itemAddModal" data-bs-toggle="modal" >
                                <button className="option-link-sec"> <i className="fa fa-plus" /></button>
                            </div>
                        </div>
                        <ItemListBySection id={`${section.id}`} />
                        <div className="modal fade " id="itemAddModal" role={"dialog"}>
                            <div className="modal-dialog modal-lg" role={"document"}>
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <label className="modal-title">Adicionar novo item</label>
                                        <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"><i className="fa fa-times" /></span>
                                        </button>
                                    </div>
                                    <div className="modal-body"><ItemAddForm id={`${section.id}`} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}

function ItemListBySection({ id: sectionId }: Props) {

    const [itemPage, setItemPage] = useState<ItemPage>({ content: [], number: 0 });

    useEffect(() => {
        axios.get(`${BASE_URL}/item/page/${sectionId}`)
            .then(response => {
                setItemPage(response.data);
            });
    }, [sectionId]);


    return (
        <>
            {itemPage.empty ? <h5>Nenhum Item Adicionado</h5> :
                <div className="row">
                    {itemPage.content?.map(item => (
                        <div key={item.sectionId} className="col-sm-12 col-lg-6 col-xl-4 mb-3">
                            <ItemMdCard item={item} />
                        </div>
                    ))}
                </div>
            }
        </>
    );
}