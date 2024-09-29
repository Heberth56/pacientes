import { useEffect } from "react";
import Options from "../components/tables/Options";
import { useDispatch, useSelector } from "react-redux";
import { getTemasDataThunk, deleteTemaDataThunk } from "../app/slice/temaSlice";
import toast, { Toaster } from "react-hot-toast";
import Confirm from "../components/ui/Confirm";
import TableContent from "../components/tables/TableContent";
import ButtonTable from "../components/tables/ButtonTable";

const TemasAdmin = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, message } = useSelector(
    (state) => state.temaSlice
  );

  const columns = [
    {
      header: "N°",
      accessorFn: (row, i) => i + 1,
      id: "index",
    },
    {
      header: "Tema",
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
          to={`/temas/${row.original.id}`}
          onClick={() => handleConfirm(row.original.id, row.original.name)}
        />
      ),
    },
  ];

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  useEffect(() => {
    dispatch(getTemasDataThunk());
  }, [dispatch]);

  const handleDelete = (tema_id, toastId) => {
    toast.dismiss(toastId);
    dispatch(deleteTemaDataThunk(tema_id))
      .unwrap()
      .then(() => {
        toast.success("Tema eliminado exitosamente");
      });
  };

  const handleConfirm = (id, name) => {
    toast.remove();
    toast(
      (t) => (
        <Confirm
          text={`¿Está seguro de que desea eliminar el tema <strong>${name}</strong>?`}
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
      <h1 className="text-xl font-bold">ADMINISTRACIÓN DE TEMAS</h1>
      <ButtonTable to="/temas" />
    </TableContent>
  );
};

export default TemasAdmin;
