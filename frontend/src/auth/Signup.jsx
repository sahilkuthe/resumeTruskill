import { SignUp, useUser } from '@clerk/clerk-react'
import React from 'react'

function SignUpPage() {
    const {user} = useUser();
    if(!user){
        return (
            <div className='flex justify-center my-20 items-center'>
              <SignUp/>
            </div>
        )
    }
    return <div>
        You already have an account
    </div>
  
}

export default SignUpPage