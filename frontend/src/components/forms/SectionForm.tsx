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

export function ItemAddForm({ id: sectionId }: Props) {

    const [section, setSection] = useState<Section>();
    useEffect(() => {
        axios.get(`${BASE_URL}/section/${sectionId}`)
            .then((response) => {
                setSection(response.data);
            })
    }, [sectionId]);

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const description = (event.target as any).description.value;
        const startDate = (event.target as any).startDate.value;
        const endDate = (event.target as any).endDate.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/item/save",
            data: {
                name: name,
                description: description,
                startDate: startDate,
                endDate: endDate,
                sectionId: sectionId
            }
        };
        axios(config).then((response) => {
            navigate(`/cv/${section?.cvId}`)
        })
    }

    return (
        <form className=" form-container m-0 row" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome: </label>
                <input type="text" className="form-control" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Descrição: </label>
                <input className="form-control" id="description"/>
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Data inicial: </label>
                <input type="date" className="form-control" id="startDate" />
            </div>

            <div className="form-group">
                <label htmlFor="endDate">Data final: </label>
                <input type="date" className="form-control form-group" id="endDate" />
            </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>
        </form>
    );
}

export function ItemEditForm({ id: itemId }: Props) {

    const [item, setItem] = useState<Item>();
    useEffect(() => {
        axios.get(`${BASE_URL}/item/${itemId}`)
            .then((response) => {
                setItem(response.data);
            })
    }, [itemId])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const description = (event.target as any).description.value;
        const startDate = (event.target as any).startDate.value;
        const endDate = (event.target as any).endDate.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "PUT",
            url: "/item/update",
            data: {
                id: itemId,
                name: name,
                description: description,
                startDate: startDate,
                endDate: endDate                
            }
        };
        axios(config).then((response) => {
            
        })
    }

    return (
        <form className=" form-container m-0 row" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nome: </label>
                <input type="text" className="form-control" id="name" defaultValue={item?.name}/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Descrição: </label>
                <input className="form-control" id="description" defaultValue={item?.description}/>
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Data inicial: </label>
                <input type="date" className="form-control" id="startDate" defaultValue={item?.startDate}/>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">Data final: </label>
                <input type="date" className="form-control form-group" id="endDate" defaultValue={item?.endDate}/>
            </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Editar</button>
            </div>
        </form>
    );
}
