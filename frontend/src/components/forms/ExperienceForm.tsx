import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Cv } from "types/cv";
import { Education } from "types/education";
import { Experience } from "types/experience";
import { Props } from "types/page";
import { BASE_URL } from "utils/requests";

export function ExperienceAddForm({ id: cvId }: Props) {

    const [cv, setCv] = useState<Cv>();
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/${cvId}`)
            .then((response) => {
                setCv(response.data);
            })
    }, [cvId]);

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const jobTitle = (event.target as any).jobTitle.value;
        const company = (event.target as any).company.value;
        const workingDay = (event.target as any).workingDay.value;
        const startDate = (event.target as any).startDate.value;
        const endDate = (event.target as any).endDate.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/experience/save",
            data: {

                jobTitle: jobTitle,
                company: company,
                workingDay: workingDay,
                startDate: startDate,
                endDate: endDate,
                cvId: cvId
            }
        };
        axios(config).then(response => {
            navigate(`/cv/${cvId}`);
        })
    }

    return (
        <form className=" form-container m-0 row" onSubmit={handleSubmit}>
            <div className="form-group col-6">
                <label htmlFor="jobTitle">Cargo: </label>
                <input type="text" className="form-control" id="jobTitle" />
            </div>

            <div className="form-group col-6">
                <label htmlFor="company">Empresa: </label>
                <input type="text" className="form-control" id="company" />
            </div>

            <div className="form-group col-6">
                <label htmlFor="workingDay">Jornada: </label>
                <input className="form-control" id="workingDay" placeholder="ex: Meio-Período, Integral, Remoto..." />
            </div>

            <div className="form-group col-6">
                <label htmlFor="startDate">Data inicial: </label>
                <input type="date" className="form-control" id="startDate" />
            </div>

            <div className="form-group col-6">
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

export function ExperienceEditForm({ id: experienceId }: Props) {

    const [experience, setExperience] = useState<Experience>();
    useEffect(() => {
        axios.get(`${BASE_URL}/experience/${experienceId}`)
            .then((response) => {
                setExperience(response.data);
            })
    }, [experienceId])
    
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const jobTitle = (event.target as any).jobTitle.value;
        const company = (event.target as any).company.value;
        const workingDay = (event.target as any).workingDay.value;
        const startDate = (event.target as any).startDate.value;
        const endDate = (event.target as any).endDate.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "PUT",
            url: "/experience/update",
            data: {
                id: experienceId,
                jobTitle: jobTitle,
                company: company,
                workingDay: workingDay,
                startDate: startDate,
                endDate: endDate
            }
            
        };
        axios(config).then(response => {
            navigate(`/cv/${experience?.cvId}`);
        })
    }

    return (
        <form className=" form-container m-0 row" onSubmit={handleSubmit}>
            <div className="form-group col-6">
                <label htmlFor="jobTitle">Cargo: </label>
                <input type="text" className="form-control" id="jobTitle" />
            </div>

            <div className="form-group col-6">
                <label htmlFor="company">Compania: </label>
                <input type="text" className="form-control" id="company" />
            </div>

            <div className="form-group col-6">
                <label htmlFor="workingDay">Jornada: </label>
                <input className="form-control" id="workingDay" placeholder="ex: Meio-Período, Integral, Remoto..." />
            </div>

            <div className="form-group col-6">
                <label htmlFor="startDate">Data inicial: </label>
                <input type="date" className="form-control" id="startDate" />
            </div>

            <div className="form-group col-6">
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
