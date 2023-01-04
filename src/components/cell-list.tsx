
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
            <CellListItem cell={cell} />
            <AddCell prevCellId={cell.id} />

        </Fragment>
    ))

    return (
        <div>
            <AddCell forceVisible={cells?.length === 0} prevCellId={null} />
            {renderedCells}

        </div>
    )

}

export default CellList