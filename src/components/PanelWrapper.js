import React from "react";
import { ResizableBox } from 'react-resizable';
import { PanelChart } from './PanelChart';
import { GridList } from './GridList';
import { useDrop } from 'react-dnd';


function PanelWrapper() {
    const width = 600;
    const height = 500;
    
    return (
        <div className="layoutRoot">
            <ResizableBox
                className="custom-box box"
                width={width}
                height={height}
                handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                handleSize={[8, 8]}
                resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}> 
                <PanelChart />
            </ResizableBox>
            <ResizableBox
                className="custom-box box"
                width={width}
                height={height}
                handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                handleSize={[8, 8]}
                resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                <GridList />
            </ResizableBox>
            <ResizableBox
                className="custom-box box"
                width={width}
                height={height}
                handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                handleSize={[8, 8]}
                resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            </ResizableBox>
            <ResizableBox
                className="custom-box box"
                width={width}
                height={height}
                handle={(h) => <span className={`custom-handle custom-handle-${h}`} />}
                handleSize={[8, 8]}
                resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
            </ResizableBox>
        </div>

    )
}

export { PanelWrapper }; 