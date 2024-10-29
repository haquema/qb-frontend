import { SignIn } from "@clerk/nextjs";

export default function LoginPage(): JSX.Element {
  return (
    <SignIn path="/login" routing="path" />
  )
}