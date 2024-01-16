import moment from "moment";
import { ItemProps } from "types/section";

export function ItemMdCard({item}: ItemProps){
    return(
        <div className="card">
            <div className="card-header">{item?.name}</div>
            <ul className="list-group">
                <li className="list-group-item">{item?.description}</li>
                {item.startDate == null ? "" :
                    <li className="list-group-item"> {moment(item?.startDate).format("MM/yyyy")}</li>
                }
                {item.endDate == null ? "" :
                    <li className="list-group-item">{moment(item?.endDate).format("MM/yyyy")}</li>
                }
            </ul>
        </div>
    );
}