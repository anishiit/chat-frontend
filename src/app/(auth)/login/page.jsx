

'use client';

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import axios from "axios";
import { useRouter } from "next/navigation";
import { setCookie } from 'nookies';

const backendurl = "https://chat-backend-rx0j.onrender.com";
const loginUserUrl = `${backendurl}/api/user/login`

export default function LoginPage() {
  const router = useRouter()

  const [error, setError] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    // Check if any field is empty
    if (!email || !password) {
      setError("All fields are required!");
      return; // Exit the function if any field is empty
    }
    try {
      await axios.post(loginUserUrl, {
        email: email,
        password: password,
      })
        .then((res) => {
          if (typeof window !== undefined) {
            localStorage.setItem("username", res.data.username)
            localStorage.setItem("userId", res.data.userId)
          }
          setCookie(null, 'username', res.data.username, {
            maxAge: 30 * 24 * 60 * 60, // Cookie expiration time
            path: '/', // Accessible across all routes
          });

          router.push('/message')
        })
        .catch((err) => {
          console.log(err);
          setError(err.response?.data?.message || "An error occurred");
        })

    } catch (error) {
      console.error(error);
      setError(error.message || "An error occurred")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-indigo-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Login to TheraWin</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700" type="submit">
                Sign In
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          {error && <p className="text-sm text-red-500 mb-2">{error}</p>}
          <p className="text-sm text-center">
            Do not have an account?{' '}
            <Link href="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}