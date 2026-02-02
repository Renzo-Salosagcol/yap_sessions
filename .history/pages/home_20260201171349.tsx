import { getAuth } from "firebase/auth";

const auth = getAuth();
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
  // ...
} else {
  // No user is signed in.
}

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>You have successfully logged in or registered.</p>
    </div>
  )
}