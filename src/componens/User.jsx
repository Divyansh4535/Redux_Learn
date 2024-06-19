import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userDelete } from '../Reducers/UserReduser'

const User = () => {
    //? const [User, user setUser] = React.useState()
    const { users } = useSelector(state => state.UserReduser)
    const dispatch = useDispatch()
    console.log('users', users)
    const DeleteHandle = (index) => {
        console.log('Delete')
        dispatch(userDelete(index))
    }
    return (
        <>
            <div className='bg-red-300 h-fit w-full flex-col flex text-center p-5 '>
                <h1 className='text-4xl font-bold '>user List</h1>
                <ul className='text-start'>
                    {users.map((user, index) => {
                        return (<li className='text-start' key={user.id}>
                            <h1>
                                {user.name}
                            <span className='text-red-800 pl-3 font-semibold cursor-pointer ' onClick={() => DeleteHandle(index)}> X</span>
                            </h1>
                        </li>
                        )

                    })}

                </ul>
            </div>

        </>
    )
}

export default User