import { ItemProps } from "types/SectionType";

export function ItemMdCard({item}: ItemProps){
    return(
        <div className="card-md-container shadow-box">
            <h3 className="card-md-title">{item?.name} </h3>
            <div className="card-sm-box">
                <h6 className="card-md-item">{item?.description}</h6>
                <div className="card-md-item">
                    <h6>{item.startDate} - {item.endDate}</h6>
                </div>
            </div>
        </div>
    );
}