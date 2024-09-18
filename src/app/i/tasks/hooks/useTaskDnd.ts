import { useUpdateTask } from "./useUpdateTask"
import { DropResult } from '@hello-pangea/dnd'

export function useTaskDnd() {
  
  const { updateTask } = useUpdateTask()

  const onDragEnd = ( result: DropResult ) => {
    if(!result.destination) return 

    const destinationColumnId = result.destination.droppableId

    if(destinationColumnId === result.source.droppableId) return

    if(destinationColumnId === 'completed'){
        updateTask({
            id: result.draggableId,
            data: {
                isCompleted: true
            }
        })

        return
    }

    // FILTERS
  }

  return {}
}