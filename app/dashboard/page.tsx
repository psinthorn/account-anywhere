
// import { auth, signOut } from '../utils/auth'
// import { redirect } from 'next/navigation';
import { requireAuth } from '../utils/hooks';

const DashboardPage = async () => {
  const session = await requireAuth();

    return (
      <div>
        
        <h1>Dashboad Page</h1>
        {/* <form
          action={ async () => {
            "use server"
            await signOut()
          }}
        >
          <button type="submit">Sign Out</button>
      </form> */}

      </div>
    )
  }

export default DashboardPage