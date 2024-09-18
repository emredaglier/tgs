"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth"; // Import signOut from firebase
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config"; // Adjust the path if necessary
import Loading from "@/components/loading";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(String);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idToken = await user.getIdToken(); // Get the Firebase ID token

        const response = await fetch("/api/data", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${idToken}`, // Send the token in the Authorization header
          },
        });

        if (response.ok) {
          const result = await response.json();
          setData(result[0].title);
        } else {
          console.error("Error fetching data:", response.statusText);
        }

        //

        setLoading(false);
      } else {
        router.push("/login");
      }
    });
    return () => unsubscribe();
  }, [router]);

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
      <p className="mt-4">Hello {data}</p>
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
