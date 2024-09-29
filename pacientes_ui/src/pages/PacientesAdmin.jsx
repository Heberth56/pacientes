import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPatientsDataThunk,
  deletePatientDataThunk,
} from "../app/slice/patientsSlice";
import toast, { Toaster } from "react-hot-toast";
import Options from "../components/tables/Options";
import Confirm from "../components/ui/Confirm";
import TableContent from "../components/tables/TableContent";
import ButtonTable from "../components/tables/ButtonTable";

const PacientesAdmin = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, message } = useSelector(
    (state) => state.patientsSlice
  );

  const columns = [
    {
      header: "N°",
      accessorFn: (row, i) => i + 1,
      id: "index",
    },
    {
      header: "Nombre completo",
      accessorFn: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
      header: "Cédula",
      accessorKey: "cedula",
    },
    {
      header: "Dirección",
      accessorKey: "address",
    },
    {
      header: "Opciones",
      accessorKey: "is_active",
      cell: ({ row }) => (
        <Options
          to={`/pacientes/${row.original.id}`}
          onClick={() =>
            handleConfirm(
              row.original.id,
              row.original.first_name,
              row.original.last_name
            )
          }
        />
      ),
    },
  ];

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  useEffect(() => {
    dispatch(getPatientsDataThunk());
  }, [dispatch]);

  const handleDelete = (id_patient, toastId) => {
    toast.dismiss(toastId);
    dispatch(deletePatientDataThunk(id_patient))
      .unwrap()
      .then(() => {
        toast.success("Paciente eliminado exitosamente");
      });
  };

  const handleConfirm = (id, first_name, last_name) => {
    toast.remove();
    toast(
      (t) => (
        <Confirm
          text={`¿Está seguro de que desea eliminar a <strong>${first_name} ${last_name}</strong>?`}
          onClick={() => handleDelete(id, t.id)}
        />
      ),
      {
        duration: 5000,
        position: "top-center",
      }
    );
  };

  return (
    <TableContent data={data} columns={columns} isLoading={isLoading} col={5}>
      <Toaster />
      <h1 className="text-xl font-bold">ADMINISTRACIÓN DE PACIENTES</h1>
      <ButtonTable to="/pacientes" />
    </TableContent>
  );
};

export default PacientesAdmin;
