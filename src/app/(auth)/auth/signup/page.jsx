"use client"

import { Suspense } from "react"
import SignupForm from "@/components/auth/SignupForm";

export const SignUpPage =()=> {
  return (
    <Suspense fallback={<div>Loading...</div>}>
       <SignupForm/>
    </Suspense>
  )
}


export default SignUpPage