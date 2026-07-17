"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const settingsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long."),
  email: z.string().trim().email("Please enter a valid email address."),
});

type SettingsFormData = z.infer<typeof settingsSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<SettingsFormData>({
    resolver: zodResolver(settingsSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data: SettingsFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    console.log("Saved settings:", data);
  };

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="mt-2 text-sm text-slate-600">
          Update your profile details below.
        </p>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              {...register("name")}
            />
            {errors.name ? (
              <p id="name-error" className="mt-2 text-sm text-red-600">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              {...register("email")}
            />
            {errors.email ? (
              <p id="email-error" className="mt-2 text-sm text-red-600">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? "Saving..." : "Save settings"}
          </button>
        </form>
      </div>
    </main>
  );
}
