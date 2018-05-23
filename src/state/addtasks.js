const initialStateForTasksList = {
    tasks: [],
    newTask: {}
}

const TYPES = {
    ADD_TASK: 'ADD_TASK',
}

const ACTIONS = {

    sendToDatabase: newTask => {
        return {
            type: TYPES.ADD_TASK,
            data: {
                newTask
            }
        }
    },
}

export default function reducer (state = initialStateForTasksList, action) {

// console.log('something changed', action, state)

    let newState = {}
    switch (action.type) {
        case TYPES.ADD_TASK:
            newState = { ...state, ...action.data }
            break

        default:
            newState = { ...state }
            break
    }

//   console.log('after changes',newState)

    return newState
}


export {
    TYPES,ACTIONS
}