import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

const Filters = () => {
  const { register, control, formState: { errors } } = useFormContext();

  return (
    <div>
      <div>
        <label>Campaña</label>
        <select {...register("campaign", { required: "Seleccione una campaña" })}>
          <option value="">Seleccionar</option>
          <option value="1">Campaña 1</option>
          <option value="2">Campaña 2</option>
        </select>
        {errors.campaign && <p>{errors.campaign.message}</p>}
      </div>

      <div>
        <label>Bandejas de Operación</label>
        <select {...register("operationTray", { required: "Seleccione una bandeja" })}>
          <option value="">Seleccionar</option>
          <option value="1">Bandeja 1</option>
          <option value="2">Bandeja 2</option>
        </select>
        {errors.operationTray && <p>{errors.operationTray.message}</p>}
      </div>

      <div>
        <label>Tipo</label>
        <select {...register("type", { required: "Seleccione un tipo" })}>
          <option value="">Seleccionar</option>
          <option value="typeA">Tipo A</option>
          <option value="typeB">Tipo B</option>
        </select>
        {errors.type && <p>{errors.type.message}</p>}
      </div>

      <div>
        <label>Fecha Inicial</label>
        <Controller
          name="startDate"
          control={control}
          rules={{ required: "Seleccione una fecha inicial" }}
          render={({ field }) => <DatePicker {...field} />}
        />
        {errors.startDate && <p>{errors.startDate.message}</p>}
      </div>

      <div>
        <label>Fecha Final</label>
        <Controller
          name="endDate"
          control={control}
          rules={{ required: "Seleccione una fecha final" }}
          render={({ field }) => <DatePicker {...field} />}
        />
        {errors.endDate && <p>{errors.endDate.message}</p>}
      </div>
    </div>
  );
};

export default Filters;
