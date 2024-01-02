import { Button } from "@/components/ui/button";
import { useFunctionContact } from "@/functions/Contact/FunctionContact";

export default function Contact() {
  const { handleChange, handleSubmit, dataMessage, formFields } =
    useFunctionContact();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contactez-Nous
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Pour toutes questions.
        </p>
        <form action="#" className="space-y-8" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                value={dataMessage[field.id]}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder={field.placeholder}
                required
              />
            </div>
          ))}
          <div className="flex justify-end">
            <Button variant="outline" type="submit">
              Envoyer
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
