import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUpForm() {
  return (
    <section className="flex min-h-screen bg-zinc-50 px-4 py-16 md:py-32 dark:bg-transparent">
      <form
        action=""
        className="bg-muted m-auto h-fit w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border shadow-md shadow-zinc-950/5 dark:[--color-muted:var(--color-zinc-900)]"
      >
        <div className="bg-card -m-px rounded-[calc(var(--radius)+.125rem)] border p-8 pb-6">
          <div className="text-left">
            <Link href="/" aria-label="go home" className="block w-fit">
              {/* <Logo /> */}
            </Link>
            <h1 className="text-title mb-1 mt-4 text-xl font-semibold">Create an Account</h1>
            <p className="text-sm">Enter your details to get started</p>
          </div>

          <div className="mt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="block text-sm">
                Username
              </Label>
              <Input type="text" required name="username" id="username" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="block text-sm">
                Email
              </Label>
              <Input type="email" required name="email" id="email" />
            </div>

            <div className="space-y-0.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="pwd" className="text-title text-sm">
                  Password
                </Label>
                <Button asChild variant="link" size="sm">
                  <Link href="#" className="link intent-info variant-ghost text-sm">
                    Forgot your Password ?
                  </Link>
                </Button>
              </div>
              <Input type="password" required name="pwd" id="pwd" className="input sz-md variant-mixed" />
            </div>

            <Button className="w-full">Sign Up</Button>
          </div>
        </div>

        <div className="p-3">
          <p className="text-accent-foreground text-center text-sm">
            Have an account ?
            <Button asChild variant="link" className="px-2">
              <Link href="/log-in">Log In</Link>
            </Button>
          </p>
        </div>
      </form>
    </section>
  )
}

