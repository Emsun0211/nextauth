"use client"
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { getServerSession } from 'next-auth'

// interface Props {
//     children: ReactNode;
//   }


 export default SessionProvider;

// function AuthSessionProvider({children} : Props) {
//     // const session = getServerSession()
//   return (
//     <div>
//         <SessionProvider>

//         {children}
//         </SessionProvider>
//     </div>
//   )
// }

// export default AuthSessionProvider