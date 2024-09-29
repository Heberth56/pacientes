import { useEffect } from "react";
import Options from "../components/tables/Options";
import { useDispatch, useSelector } from "react-redux";
import { getUsersDataThunk, delteUserDataThunk } from "../app/slice/usersSlice";
import toast, { Toaster } from "react-hot-toast";
import Confirm from "../components/ui/Confirm";
import TableContent from "../components/tables/TableContent";
import ButtonTable from "../components/tables/ButtonTable";

const UsuariosAdmin = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, message } = useSelector(
    (state) => state.usersSlice
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
      header: "Email",
      accessorKey: "email",
    },
    {
      header: "Cédula",
      accessorKey: "cedula",
    },
    {
      header: "Usuario",
      accessorKey: "username",
    },
    {
      header: "Opciones",
      accessorKey: "is_active",
      cell: ({ row }) => (
        <Options
          to={`/usuarios/${row.original.id}`}
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
    dispatch(getUsersDataThunk());
  }, [dispatch]);

  const handleDelete = (id_user, toastId) => {
    toast.dismiss(toastId);
    dispatch(delteUserDataThunk(id_user)).then((x) => {
      if (!x.error) toast.success("Usuario eliminado correctamente");
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
    <TableContent data={data} columns={columns} isLoading={isLoading} col={6}>
      <Toaster />
      <h1 className="text-xl font-bold">ADMINISTRACION DE USUARIOS</h1>
      <ButtonTable to="/usuarios" />
    </TableContent>
  );
};

export default UsuariosAdmin;
