import { getServerSession } from "next-auth";
import CustomSignInButton from "../components/CustomSignInButton";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function CustomLoginPage() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h2> A custom NextAuth login page</h2>
      {session && <p>You are already signed in.</p>}
      {!session && (
        <div>
          <CustomSignInButton />
        </div>
      )}
    </div>
  );
}