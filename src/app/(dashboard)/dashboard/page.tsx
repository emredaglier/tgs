"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth"; // Import signOut from firebase
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config"; // Adjust the path if necessary
import Loading from "@/components/loading";
import { getData } from "@/drizzle/db";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(String);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      const pholder = await getData();
      setData(pholder[0].title);
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Logs out the user
      router.push("/login"); // Redirect to sign-in page
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[--background]">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      <p className="mt-4">Hello</p>
      <button
        onClick={handleLogout}
        className="px-4 py-2 mt-6 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
