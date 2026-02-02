import { getAuth, signOut } from "firebase/auth";
import { app } from '../../pages/api/firebase';
import { redirect } from 'next/navigation';

import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader
} from "@/components/ui/sidebar"

const auth = getAuth(app);
const user = auth.currentUser;

if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
  const uid = user.uid;
  // ...
} else {
  // No user is signed in.
}

export default function Home() {
  return (
    <main className="root-page-element text-6xl">
      Home
    </main>
  )
}