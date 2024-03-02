import Navbar from '@/components/shared/Navbar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { createUser } from '@/models/User'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@/components/ui/use-toast'
import { zodInputStringPipe } from '@/lib/zodInputString'

const formSchema = z.object({
  firstName: z.string().min(1, 'Please enter a valid value'),
  lastName: z.string().min(1, 'Please enter a valid value'),
  age: zodInputStringPipe(z.number().positive('Please enter a valid age')),
})

export default function CreateUserForm() {
  const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const user = await createUser({ ...values, age: values.age as number })
      if (user.status === 201) {
        redirectToSuccessPage(user.payload._id)
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: String(error),
        variant: 'destructive',
      })
    }
  }

  const redirectToSuccessPage = (id: number) => {
    navigate(`/created-user/${id}`)
  }

  return (
    <>
      <Navbar />
      <section className="grid justify-center">
        <Card className="min-w-[360px] mt-10">
          <CardHeader>
            <CardTitle>Create user</CardTitle>
            <CardDescription>Create new user in database</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form>
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter first name for new user
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Dee" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter last name for new user
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="0" {...field} />
                      </FormControl>
                      <FormDescription>Enter age for new user</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
          </CardFooter>
        </Card>
      </section>
    </>
  )
}
