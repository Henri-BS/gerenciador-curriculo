import axios from "axios";
import { CvCard } from "components/cards/CvCard";
import { useEffect, useState } from "react";
import { CvPage } from "types/CvTypes";
import { BASE_URL } from "utils/requests";


function Home(){
    const[value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [clientList, setClientList] = useState<CvPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/page?page=${pageNumber}&name=${value}`)
            .then((response) => {
                setClientList(response.data);
            });
    }, [pageNumber, value]);

    return (
        <>
            <div className="container">

                <nav className="pagination-container">
                    <div className="m-3" >
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
                </nav>
                <div className="row">
                    {clientList.content?.filter((x) =>
                    x.name.toUpperCase().includes(value.toLocaleUpperCase()))
                    .map(x => (
                        <div key={x.id} className="col-12 col-md-6 col-xl-4 mb-3">
                            <CvCard cv={x} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="modal fade" id="addClientModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label htmlFor="clientLabel" className="modal-title">Adicionar um novo cliente</label>
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

export default Home;