import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

// All the rules for our validation
const schema = z.object({
    name: z
    .string().min(3, { message: "Name must be at least 3 characters" }),
    
    age: z
        .number({ invalid_type_error: "Age field is required" })
        .min(18, { message: "Minimum age is 18" }),
});
// After that we use a method to extract a type from the schema
type FormData = z.infer<typeof schema>;

const Form = () => {
    // Using the destructor to get to attributes from the useForm object
    const {
        register,
        handleSubmit,
        // Nested Destructor, which we are getting an element within the object formState
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                    Name:
                </label>
                <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="form-control"
                />
                {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age:
                </label>
                <input
                    {...register("age")}
                    id="age"
                    type="number"
                    className="form-control"
                />
                {errors.age && (
                    <p className="text-danger">{errors.age.message}</p>
                )}
            </div>
            <button disabled={!isValid} className="btn btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default Form;
