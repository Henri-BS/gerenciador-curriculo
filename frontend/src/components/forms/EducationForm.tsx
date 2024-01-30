import axios, { AxiosRequestConfig } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Cv } from "types/cv";
import { Education } from "types/education";
import { Props } from "types/page";
import { BASE_URL } from "utils/requests";

export function EducationAddForm({ id: cvId }: Props) {

    const [cv, setCv] = useState<Cv>();
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/${cvId}`)
            .then((response) => {
                setCv(response.data);
            })
    }, [cvId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const course = (event.target as any).course.value;
        const institution = (event.target as any).institution.value;
        const status = (event.target as any).status.value;
        const academicDegree = (event.target as any).academicDegree.value;
        const startDate = (event.target as any).startDate.value;
        const endDate = (event.target as any).endDate.value;
        
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/education/save",
            data: {
                course: course,
                institution: institution,
                status: status,
                academicDegree: academicDegree,
                startDate: startDate,
                endDate: endDate,
                cvId: cvId
            }
        };
        axios(config).then(response => {
        })
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="course">Curso: </label>
                <input className="form-control" id="course" />
            </div>

            <div className="form-group">
                <label htmlFor="institution">Instituição de ensino: </label>
                <input className="form-control" id="institution" />
            </div>

            <div className="form-group">
                <label htmlFor="status">Situação: </label>
                <input className="form-control" id="status" placeholder="ex: Cursando, Concluído, Trancado..."/>
            </div>

            <div className="form-group">
                <label htmlFor="academicDegree">Grau acadêmico: </label>
                <input className="form-control" id="academicDegree" placeholder="ex: Graduação, Especialização..."/>
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

export function EducationEditForm({ id: educationId }: Props) {

    const [education, setEducation] = useState<Education>();
    useEffect(() => {
        axios.get(`${BASE_URL}/education/${educationId}`)
            .then((response) => {
                setEducation(response.data);
            })
    }, [educationId])

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const course = (event.target as any).course.value;
        const institution = (event.target as any).institution.value;
        const status = (event.target as any).status.value;
        const academicDegree = (event.target as any).academicDegree.value;
        const startDate = (event.target as any).startDate.value;
        const endDate = (event.target as any).endDate.value;
        
        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "PUT",
            url: "/education/update",
            data: {
                id: educationId,
                course: course,
                institution: institution,
                status: status,
                academicDegree: academicDegree,
                startDate: startDate,
                endDate: endDate
            }
        };
        axios(config).then(response => {
            navigate(`/cv/${education?.cvId}`);
        })
    }

    return (
        <form className=" form-card-container m-0 " onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="course">Curso: </label>
                <input type="text" className="form-control" id="course" defaultValue={education?.course}/>
            </div>

            <div className="form-group">
                <label htmlFor="institution">Instituição de ensino: </label>
                <input type="text" className="form-control" id="institution" defaultValue={education?.institution}/>
            </div>

            <div className="form-group">
                <label htmlFor="status">Situação: </label>
                <input className="form-control" id="status" defaultValue={education?.status}/>
            </div>

            <div className="form-group">
                <label htmlFor="academicDegree">Grau acadêmico: </label>
                <input type="text" className="form-control" id="academicDegree" defaultValue={education?.academicDegree}/>
            </div>

            <div className="form-group">
                <label htmlFor="startDate">Data inicial: </label>
                <input type="date" className="form-control" id="startDate" defaultValue={education?.startDate}/>
            </div>

            <div className="form-group">
                <label htmlFor="endDate">Data final: </label>
                <input type="date" className="form-control form-group" id="endDate" defaultValue={education?.endDate}/>
            </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Editar</button>
            </div>
        </form>
    );
}
