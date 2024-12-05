import { useForm, FormProvider } from "react-hook-form";
import { useMutation } from "react-query";
import axios from "axios";
import Filters from "./Filters.tsx";
import Spinner from "./Spinner.tsx";

const Form = () => {  
  const methods = useForm({
    defaultValues: {
      campaign: "",
      operationTray: "",
      type: "",
      startDate: null,
      endDate: null,
    },
  });

  const { handleSubmit } = methods;

  const mutation = useMutation(
    async (data) => {
      const response = await axios.post("/api/endpoint", data);
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log("Datos recibidos:", data);
      },
      onError: (error) => {
        console.error("Error al enviar datos:", error);
      },
    }
  );

  const onSubmit = (data) => {
    mutation.mutate(data);
    console.log(data)
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Filters />
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? "Cargando..." : "Enviar"}
        </button>
        {mutation.isLoading && <Spinner />}
      </form>
    </FormProvider>
  );
};

export default Form;
