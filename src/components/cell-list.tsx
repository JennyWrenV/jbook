import { useSelector } from "react-redux"
import { RootState } from "../state";
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { Fragment } from "react";

const CellList: React.FC = () => {

    const cells = useTypedSelector(({ cells }) => {
        if (cells) {
            const { order, data } = cells
            return order.map((id) => data[id])
        }
        return undefined
    });

    const renderedCells = cells?.map((cell) => (
        <Fragment key={cell.id}>
            <AddCell nextCellId={cell.id} />
            <CellListItem  cell={cell} />
        </Fragment>
    ))

    return (
        <div>
            {renderedCells}
            <AddCell forceVisible={cells?.length === 0} nextCellId={null} />
        </div>
    )

}

export default CellList