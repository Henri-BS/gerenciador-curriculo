import axios from "axios";
import { CvCard } from "components/cards/CvCard";
import { CvAddForm } from "components/forms/CvForm";
import Pagination from "components/shared/Pagination";
import { useEffect, useState } from "react";
import { CvPage } from "types/cv";
import { BASE_URL } from "utils/requests";


function Home() {
    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [cvPage, setCvPage] = useState<CvPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/page?page=${pageNumber}&name=${value}&size=12`)
            .then((response) => {
                setCvPage(response.data);
            });
    }, [pageNumber, value]);

    return (
        <>
            <div className="container">

                <nav className="navbar row">
                    <div className="col-6 col-md-4 col-xl-4 mb-2" >
                        <button data-bs-target="#addCvModal" data-bs-toggle="modal" className="option-link"><i className="fa fa-file-text" /> Novo Currículo</button>
                    </div>
                    <div className="col-6 col-md-4 col-xl-3 mb-2" >
                        <Pagination page={cvPage} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input
                                type="text"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control"
                                placeholder="buscar currículos..."
                            />
                        </div>
                    </div>
                </nav >

                <div className="row">
                    {cvPage.content?.filter((x) =>
                        x.name.toUpperCase().includes(value.toLocaleUpperCase()))
                        .map(x => (
                            <div key={x.id} className="col-12 col-md-6 col-xl-4 mb-3">
                                <CvCard cv={x} />
                            </div>
                        ))}
                </div>
            </div >
            
            <div className="modal fade" id="addCvModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Adicionar um novo currículo</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><CvAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;