import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@/components/UI/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select"
import useEditClient from "@/hooks/clients/useEditClient"

type ControleBandwithProps = {
  client: any
}


const ControleBandwith = ({ client }: ControleBandwithProps) => {
  // Conversion from Mbps to MBps
  const { mutate } = useEditClient({
    id: client?.client?._id
  })
  const mbpsToMB = (mbps: number) => (mbps * 0.125).toFixed(2)

  // Set up the form with default values
  const form = useForm<any>();
  // Handler for form submission
  const onSubmit: SubmitHandler<any> = (data) => {
    mutate(data);
  }

  // Create an array for select options (1 MBps to 50 MBps)
  const options = Array.from({ length: 50 }, (_, i) => i + 1)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        {/* Bandwidth Control */}
        <FormField
          control={form.control}
          name="max_bw"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Bandwidth (MB/s)</FormLabel>
              <h4 className="capitalize">current subsciption {mbpsToMB(client?.client?.max_bw ?? 0)} Mb</h4>
              <Select
                value={String(field.value)} // Use value instead of defaultValue
                onValueChange={(value) => field.onChange(Number(value))}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select max bandwidth" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {options.map(option => (
                    <SelectItem key={option} value={String(option / 0.125)}>
                      {option} MB/s
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Adjust the maximum bandwidth for the client.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default ControleBandwith
