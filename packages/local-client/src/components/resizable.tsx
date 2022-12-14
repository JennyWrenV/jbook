import { ResizableBox, ResizableBoxProps } from "react-resizable";
import './resizable.css'
import { useEffect, useState } from 'react';



interface ResizableProps {
    direction: "horizontal" | "vertical";
    children: React.ReactNode;
}
const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
    let resizableProps: ResizableBoxProps;
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [width, setWidth] = useState(window.innerWidth * .75)


    useEffect(() => {
        let timer: any;
        const listener = () => {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                setInnerHeight(window.innerHeight);
                setInnerWidth(window.innerWidth);
                if (window.innerWidth * .75 < width) {
                    setWidth(window.innerWidth * .75)
                }
            }, 100);
        }
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [width])

    if (direction === 'horizontal') {
        resizableProps = {
            className: 'resize-horizontal',
            maxConstraints: [innerWidth * .75, Infinity],
            minConstraints: [innerWidth * .2, Infinity],
            height: Infinity,
            width: width,
            resizeHandles: ['e'],
            onResizeStop: (event, data) => {
                setWidth(data.size.width)
            }

        }
    } else {
        resizableProps = {
            minConstraints: [Infinity, 30],
            maxConstraints: [Infinity, innerHeight * .9],
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