import './ItemData.css';

function ItemDate(props) {
    const date = props.date;
    const month = props.month;
    const year = props.year;

    return (
        <div className="Date">
            <span>{date}</span>
            <span> {month}</span>
            <span> {year}</span>
        </div>
    );
}

export default ItemDate