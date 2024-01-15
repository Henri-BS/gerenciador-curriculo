import { ItemProps } from "types/section";

export function ItemMdCard({item}: ItemProps){
    return(
        <div className="card rounded">
            <div className="card-header">{item?.name}</div>
            <ul className="list-group">
                <li className="list-group-item">{item?.description}</li>
                {item.startDate == null ? "" :
                    <li className="list-group-item"> {item?.startDate}</li>
                }
                {item.endDate == null ? "" :
                    <li className="list-group-item">{item?.endDate}</li>
                }
            </ul>
        </div>
    );
}