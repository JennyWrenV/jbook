import { ResizableBox, ResizableBoxProps } from "react-resizable";
import './resizable.css'

interface ResizableProps {
    direction: "horizontal" | "vertical";
    children: React.ReactNode;
}
const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;

    if (direction === 'horizontal') {
        resizableProps = {
            className: 'resize-horizontal',
            maxConstraints: [window.innerWidth * .75, Infinity],
            minConstraints: [window.innerWidth * .2, Infinity],
            height: Infinity,
            width: window.innerWidth * .75,
            resizeHandles: ['e']

        }
    } else {
        resizableProps = {
            minConstraints: [Infinity, 30],
            maxConstraints: [Infinity, window.innerHeight * .9],
            height: 300,
            width: Infinity,
            resizeHandles: ['s']
        }
    }
    return (
        <ResizableBox {...resizableProps}>
            {children}
        </ResizableBox>
    )
};

export default Resizable;