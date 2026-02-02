"use client";

import { getAuth, signOut } from "firebase/auth";
import { app } from '../../pages/api/firebase';
import { useRouter } from "next/navigation";

import { SidebarTrigger } from "@/components/sidebarTrigger"

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
  const router = useRouter();
  
  return (
    <main className="root-page-element m-0 top-0 left-0">
      <SidebarTrigger />
      Home
    </main>
  )
}