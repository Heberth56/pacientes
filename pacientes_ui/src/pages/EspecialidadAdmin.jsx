import { useEffect } from "react";
import Options from "../components/tables/Options";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecialtiesDataThunk,
  deleteSpecialtyDataThunk,
} from "../app/slice/specialtySlices";
import toast, { Toaster } from "react-hot-toast";
import Confirm from "../components/ui/Confirm";
import TableContent from "../components/tables/TableContent";
import ButtonTable from "../components/tables/ButtonTable";

const EspecialidadAdmin = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, message } = useSelector(
    (state) => state.specialtySlices
  );

  const columns = [
    {
      header: "N°",
      accessorFn: (row, i) => i + 1,
      id: "index",
    },
    {
      header: "Especialidad",
      accessorKey: "name",
    },
    {
      header: "Descripción",
      accessorKey: "description",
    },
    {
      header: "Opciones",
      accessorKey: "is_active",
      cell: ({ row }) => (
        <Options
          to={`/especialidad/${row.original.id}`}
          onClick={() => handleConfirm(row.original.id, row.original.name)}
        />
      ),
    },
  ];

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  useEffect(() => {
    dispatch(getSpecialtiesDataThunk());
  }, [dispatch]);

  const handleDelete = (specialty_id, toastId) => {
    toast.dismiss(toastId);
    dispatch(deleteSpecialtyDataThunk(specialty_id))
      .unwrap()
      .then(() => {
        toast.success("Especialidad eliminado exitosamente");
      });
  };

  const handleConfirm = (id, name) => {
    toast.remove();
    toast(
      (t) => (
        <Confirm
          text={`¿Está seguro de que desea eliminar la especialidad <strong>${name}</strong>?`}
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
    <TableContent data={data} columns={columns} isLoading={isLoading} col={4}>
      <Toaster />
      <h1 className="text-xl font-bold">ADMINISTRACIÓN DE ESPECIALIDADES</h1>
      <ButtonTable to="/especialidad" />
    </TableContent>
  );
};

export default EspecialidadAdmin;
