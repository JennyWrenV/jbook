import { useSelector } from "react-redux"
import { RootState } from "../state";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";


const CellList: React.FC = () => {

    const cells = useTypedSelector(({ cells }) => {
        if (cells) {
            const { order, data } = cells
            return order.map((id) => data[id])
        }
        return undefined
    });

    const renderedCells = cells?.map(cell => <CellListItem key={cell.id} cell={cell} />)

    return (
        <div>
            {renderedCells}
        </div>
    )

}

export default CellList