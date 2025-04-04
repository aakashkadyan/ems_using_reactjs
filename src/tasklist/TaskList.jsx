import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data)
  return (
    <div id ='tasklist' className='h-[55%] overflowx-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10 rounded'>
        {data.tasks.map((elem) => {

            if(elem.active){

                return <AcceptTask />
            }
            if(elem.newTask){

                return <NewTask />
            }

            if(elem.completedTask){

                return <CompleteTask />
            }

            if(elem.failed){

                return <FailedTask />
            }


        })}

        
        
        {/* <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FailedTask /> */}

                
    </div>
  )
}

export default TaskList
