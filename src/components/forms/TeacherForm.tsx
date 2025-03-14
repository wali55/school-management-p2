import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters long!' }).max(20, {message: "Username must be at most 20 characters long!"}),
    email: z.string().email({message: "Invalid email address!"}),
    password: z.string().min(8, {message: "Password must be at least 8 characters long!"}),
    firstName: z.string().min(1, {message: "First Name is required!"}),
    lastName: z.string().min(1, {message: "Last Name is required!"}),
    phone: z.string().min(1, {message: "Phone is required!"}),
    address: z.string().min(1, {message: "Address is required!"}),
    birthday: z.date({message: "Birthday is required!"}),
    sex: z.enum(["male", "female"], {message: "Sex is required!"}),
    img: z.instanceof(File, {message: "Image is required!"})
});

const TeacherForm = ({type, data}: {
    type: "create" | "update";
    data?: any;
}) => {
    const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(schema)});

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <h1 className="text-xl font-semibold">{type === "create" ? "Create Teacher" : "Update Teacher"}</h1>
            <span className="text-xs text-gray-400 font-semibold">Authentication Information</span>
            <div className="flex flex-col gap-2 w-full md:w-1/4">
                <label className="text-xs text-gray-500">Username</label>
                <input type="text" {...register("username")} className="w-full rounded-md border border-gray-400 text-sm p-2" />
                {errors.username?.message && <p className="text-xs text-red-500">{errors.username?.message}</p>}
            </div>
            <span className="text-xs text-gray-400 font-semibold">Personal Information</span>
            <button className="bg-sky-400 text-white px-4 py-2 rounded-md">{type === "create" ? "Create" : "Update"}</button>
        </form>
    )
}

export default TeacherForm;
