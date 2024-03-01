import { KanbanColumnSkeleton, ProjectCardSkeleton } from '@/components'
import { KanbanAddCardButton } from '@/components/tasks/kanban/add-card-button'
import { KanbanBoardContainer,KanbanBoard } from '@/components/tasks/kanban/board'
import ProjectCard, { ProjectCardMemo } from '@/components/tasks/kanban/card'
import KanbanColumn from '@/components/tasks/kanban/column'
import KanbanItem from '@/components/tasks/kanban/item'
import { TASKS_QUERY, TASK_STAGES_QUERY } from '@/graphql/queries'
import { Task, TaskStage } from '@/graphql/schema.types'
import { TasksQuery } from '@/graphql/types'
import { useList } from '@refinedev/core'
import { GetFieldsFromList } from '@refinedev/nestjs-query'
import { Item } from 'rc-menu'
import React from 'react'

const List = () => {

  const {data:stages,isLoading:isLoadingStages} = useList<TaskStage>({
    resource:'taskStages',
    filters:[
      {
        field:'title',
        operator:'in',
        value: ['TODO', 'IN PROGRESS', 'IN REVIEW', 'DONE']
      }
    ],
    sorters:[
      {
        field:'createdAt',
        order:'asc',
      }
    ],
    meta:{
      gqlQuery:TASK_STAGES_QUERY
    }
  })
  const {data:tasks,isLoading:isLoadingTasks} = useList<GetFieldsFromList<TasksQuery>>({
    resource:'tasks',
    sorters:[
      {
        field:'dueDate',
        order:'asc'
      }
    ],
    pagination:{
      mode:'off'
    },
    queryOptions:{
      enabled: !!stages
    },
    meta:{
      gqlQuery:TASKS_QUERY
    }

  })

  const taskStages = React.useMemo(() => {
    if (!tasks?.data || !stages?.data){
      return {
        unnasignedStage: [],
        stages: []
      }
    }

    const unnasignedStage = tasks.data.filter((task) => task.stageId === null)
    const grouped: TaskStage[] = stages.data.map((stage) => ({
      ...stage,
      tasks: tasks.data.filter((task) => task.stageId?.toString() === stage.id) as Task[]
    }))

    return {
      unnasignedStage,
      columns: grouped
    }
  },[stages,tasks])



  const isLoading = isLoadingStages || isLoadingTasks

  if(isLoading) return <PageSkeleton/>

  return (
    <>

    <KanbanBoardContainer>
        <KanbanBoard>
            <KanbanColumn
            id="unnasigned"
            title={"unnasigned"}
            count = {taskStages.unnasignedStage.length || 0}
            >
              {taskStages.unnasignedStage.map((task) => (
                <KanbanItem
                key={task.id}
                id={task.id}
                data={{...task,stageId: 'unnasigned'}}
                >
                  <ProjectCardMemo
                    {...task}
                    dueDate={task.dueDate || undefined}
                  />
                </KanbanItem>

              ))}
              {!taskStages.unnasignedStage.length && (
                <KanbanAddCardButton
                onClick={() => {
                  console.log('add card')

                }}
                />
              )}
            </KanbanColumn>

            {taskStages.columns?.map((column) => (
              <KanbanColumn
              key={column.id}
              id={column.id}
              title={column.title}
              count = {column.tasks.length}
              >
                {!isLoading && column.tasks.map((task) => (
                  <KanbanItem key={task.id} id={task.id} data={task}>
                   <ProjectCardMemo
                      {...task}
                      dueDate={task.dueDate || undefined}
                   />
                  </KanbanItem>
                ))}

              </KanbanColumn>
            ))}
        </KanbanBoard>
    </KanbanBoardContainer>

    </>
  )
}

export default List

const PageSkeleton = () => {
  const columnCount = 6;
  const itemCount = 10;

  return(
    <KanbanBoardContainer>
      {Array.from({length: columnCount}).map((_,index) => (
        <KanbanColumnSkeleton key={index}>
          {Array.from({length:itemCount}).map((_,index) => (
             <ProjectCardSkeleton key={index}/>
          ))}

        </KanbanColumnSkeleton>
      ) )}
    </KanbanBoardContainer>
  )
}
