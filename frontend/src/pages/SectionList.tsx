import axios from "axios";
import { ItemMdCard } from "components/cards/ItemCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Props } from "types/CvType";
import { ItemPage, SectionPage } from "types/SectionType";
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
            <fieldset>
                <hr />
                <div>
                    {sectionPage.content?.map(section => (
                        <div key={section.cvId}>
                                <legend><h2>{section.title}</h2></legend>
                            <ItemListBySection id={`${section.id}`} />
                        </div>
                    ))}
                </div>
            </fieldset>
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