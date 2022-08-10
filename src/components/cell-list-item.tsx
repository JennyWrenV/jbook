import { Cell } from '../state'

interface CellListItemsProps {
    cell: Cell
}

const CellListItem: React.FC<CellListItemsProps> = ({ cell }) => {
    return (<div>
        {cell.id}
    </div>)

}

export default CellListItem