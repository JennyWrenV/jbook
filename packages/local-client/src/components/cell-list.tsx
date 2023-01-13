
import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { Fragment, useEffect } from "react";
import './cell-list.css'
import { useActions } from "../hooks/use-actions";


const CellList: React.FC = () => {

    const cells = useTypedSelector(({ cells }) => {
        if (cells) {
            const { order, data } = cells
            return order.map((id) => data[id])
        }
        return undefined
    });

    const { fetchCells } = useActions();

    useEffect(() => {
        fetchCells();
    }, [])

    const renderedCells = cells?.map((cell) => (
        <Fragment key={cell.id}>
            <CellListItem cell={cell} />
            <AddCell prevCellId={cell.id} />

        </Fragment>
    ))

    return (
        <div className="cell-list">
            <AddCell forceVisible={cells?.length === 0} prevCellId={null} />
            {renderedCells}

        </div>
    )

}

export default CellList