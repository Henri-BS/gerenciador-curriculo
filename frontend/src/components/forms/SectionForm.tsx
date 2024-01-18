import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Cv } from "types/cv";
import { Props } from "types/page";
import { Item, Section } from "types/section";
import { BASE_URL } from "utils/requests";

export function SectionAddForm({ id: cvId }: Props) {

    const [cv, setCv] = useState<Cv>();
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/${cvId}`)
            .then((response) => {
                setCv(response.data);
            })
    }, [cvId]);

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const title = (event.target as any).title.value;
       
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/section/save",
            data: {
                title: title,
                cvId: cvId
            }
        };
        axios(config).then(response => {
            navigate(`/cv/${cvId}`);
        })
    }

    return (
        <form className=" form-container m-0 row" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Título: </label>
                <input type="text" className="form-control" id="title" />
            </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>
        </form>
    );
}

export function SectionEditForm({ id: sectionId }: Props) {

    const [section, setSection] = useState<Section>();
    useEffect(() => {
        axios.get(`${BASE_URL}/section/${sectionId}`)
            .then((response) => {
                setSection(response.data);
            })
    }, [sectionId])

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const title = (event.target as any).title.value;
       
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "PUT",
            url: "/section/update",
            data: {
                id: sectionId,
                title: title,
            }
        };
        axios(config).then((response) => {
            navigate(`/cv/${section?.cvId}`)
        })
    }

    return (
        <form className=" form-container m-0 row" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Título da seção: </label>
                <input type="text" className="form-control" id="title" defaultValue={section?.title}/>
            </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>
        </form>
    );
}

