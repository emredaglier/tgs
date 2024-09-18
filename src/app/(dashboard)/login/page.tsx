"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config";
import Loading from "@/components/loading";
import { Button } from "@/components/ui/button";

const SignIn = () => {
  const [loading, setLoading] = useState(true); // State for loading
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [error, setError] = useState(""); // State for error message
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/dashboard"); // Redirect to dashboard if logged in
      } else {
        setLoading(false); // Stop loading if user is not logged in
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [router]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error state
    setLoading(true); // Set loading state during sign-in attempt

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // Redirect on successful sign-in
    } catch (err) {
      setError("Failed to sign in. Please check your credentials."); // Show error if sign-in fails
      setLoading(false); // Stop loading if sign-in fails
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-[--background] font-geist">
      <div className="flex flex-col rounded-lg">
        <span className="mb-4 text-2xl font-bold">Content Dashboard</span>
        {error && <p className="mb-4 text-red-500">{error}</p>}{" "}
        {/* Display error message */}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[--foreground]"
            >
              E-Mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-[--foreground] p-3 mt-1  bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--accent]"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[--foreground]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
              className="w-full p-3 mt-1 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[--accent]"
              required
            />
          </div>

          <Button type="submit" className="w-min">
            Log In
          </Button>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
