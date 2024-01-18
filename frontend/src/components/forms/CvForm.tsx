import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Cv } from "types/cv";
import { Props } from "types/page";
import { BASE_URL } from "utils/requests";

export function CvAddForm() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const jobTitle = (event.target as any).jobTitle.value;
        const description = (event.target as any).description.value;
        const image = (event.target as any).image.value;
        const email = (event.target as any).email.value;
        const phone = (event.target as any).phone.value;
        const location = (event.target as any).location.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/cv/save",
            data: {
                name: name,
                jobTitle: jobTitle,
                description: description,
                image: image,
                email: email,
                phone: phone,
                location: location
            }
        };
        axios(config).then(response => {
            navigate("/");
        })
    }

    return (
        <form className=" form-container m-0 row" onSubmit={handleSubmit}>

            <div className="form-group col-6">
                <label htmlFor="name">Nome Completo: </label>
                <input type="text" className="form-control" id="name" />
            </div>

            <div className="form-group col-6">
                    <label htmlFor="jobTitle">Cargo: </label>
                    <input type="text" className="form-control" id="jobTitle"/>
                </div>

            <div className="form-group col-6">
                <label htmlFor="image">Imagem: </label>
                <input type="text" className="form-control" id="image" />
            </div>

            <div className="form-group col-6">
                <label htmlFor="email">Email: </label>
                <input className="form-control" id="email" />
            </div>

            <div className="form-group col-6">
                <label htmlFor="phone">Phone: </label>
                <input type="text" className="form-control" id="phone" />
            </div>

            <div className="form-group col-6">
                <label htmlFor="location">Localização: </label>
                <input type="text" className="form-control" id="location" />
            </div>

            <div className="form-group col-12">
                    <label htmlFor="description">Descrição: </label>
                    <textarea className="form-control" id="description"></textarea>
                </div>


            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>
        </form>
    );
}

export function CvEditForm({ id: cvId }: Props) {

    const [cv, setCv] = useState<Cv>();
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/${cvId}`)
            .then((response) => {
                setCv(response.data);
            })
    }, [cvId])

    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const jobTitle = (event.target as any).jobTitle.value;
        const description = (event.target as any).description.value;
        const image = (event.target as any).image.value;
        const email = (event.target as any).email.value;
        const phone = (event.target as any).phone.value;
        const location = (event.target as any).location.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "PUT",
            url: "/cv/update",
            data: {
                id: cvId,
                name: name,
                jobTitle: jobTitle,
                description: description,
                image: image,
                email: email,
                phone: phone,
                location: location
            }
        };
        axios(config).then((response) => {
            navigate(`/product/${cvId}`)
        })
    };

    return (
        <form className="form-card-container row" onSubmit={handleSubmit}>
                <div className="form-group col-6">
                    <label htmlFor="name">Nome Completo: </label>
                    <input type="text" className="form-control" id="name" defaultValue={cv?.name}/>
                </div>

                <div className="form-group col-6">
                    <label htmlFor="jobTitle">Cargo: </label>
                    <input type="text" className="form-control" id="jobTitle" defaultValue={cv?.jobTitle}/>
                </div>

                <div className="form-group col-6">
                    <label htmlFor="image">Imagem: </label>
                    <input type="text" className="form-control" id="image" defaultValue={cv?.image}/>
                </div>

                <div className="form-group col-6">
                    <label htmlFor="email">Email: </label>
                    <input className="form-control" id="email" defaultValue={cv?.email}/>
                </div>

                <div className="form-group col-6">
                    <label htmlFor="phone"> Telefone Celular: </label>
                    <input type="text" className="form-control" id="phone" defaultValue={cv?.phone}/>
                </div>

                <div className="form-group col-6">
                    <label htmlFor="location">Localização: </label>
                    <input type="text" className="form-control" id="location" defaultValue={cv?.location}/>
                </div>

                <div className="form-group col-12">
                    <label htmlFor="description">Descrição: </label>
                    <textarea className="form-control" id="description" defaultValue={cv?.description}></textarea>
                </div>


             <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Editar</button>
            </div>
        </form>
    );
}

