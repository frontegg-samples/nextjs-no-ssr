// Hosted Login

import { useEffect, useCallback } from 'react';
import { useAuth, useLoginWithRedirect, AdminPortal } from "@frontegg/nextjs";
import { useRouter } from "next/router"



const  Home= () => {
  const { user, isAuthenticated } = useAuth();
  const loginWithRedirect = useLoginWithRedirect();
  const router = useRouter();

  // Uncomment this to redirect to login automatically
  useEffect(() => {
    if (!isAuthenticated) {
  loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const handleClick = () => {
    AdminPortal.show();
  };

  const logout = useCallback(() => {
    router.replace('/account/logout');
  }, [router]);

  return (
    <div className="App">
      { isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name}/>
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <button className="Button" onClick={handleClick}>Settings</button>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default Home;


// // Embedded Login

// import {useAuth, AdminPortal} from '@frontegg/nextjs';

// const Home = () => {
//   const { user, isAuthenticated }  = useAuth();

//   const handleClick = () => {
//     AdminPortal.show();
//   };

//   return (
//     <div className="App">
//       { isAuthenticated ? (
//         <div>
//           <div>
//             <img src={user?.profilePictureUrl} alt={user?.name}/>
//           </div>
//           <div>
//             <span>Logged in as: {user?.name}</span>
//           </div>
//           <div>
//             <button onClick={() => alert(user?.accessToken)}>What is my access token?</button>
//           </div>
//           <button className="Button" onClick={handleClick}>Settings</button>
//           <div>
//           <button onClick={() => window.location.href = '/account/logout'}>Click me to logout</button>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <button onClick={() => window.location.href = '/account/login'}>Click me to login</button>
//         </div>
//       )}
//     </div>
//   )
// }
// export default Home