import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTestsDataThunk } from "../app/slice/testSlice";
import toast, { Toaster } from "react-hot-toast";
import Confirm from "../components/ui/Confirm";
import TableContent from "../components/tables/TableContent";
import ButtonTable from "../components/tables/ButtonTable";
import { FaClipboardCheck, FaQrcode, FaTrashAlt } from "react-icons/fa";
import Links from "../components/ui/Links";

const Options = ({ id, ...props }) => {
  return (
    <ul className="flex row-auto gap-2">
      <Links link={`/diagnostico/${id}`}>
        <FaClipboardCheck className="text-green-500 text-xl" />{" "}
        <span className="font-semibold">Ver</span>
      </Links>
      <button
        className="mt-1 p-3 hover:bg-gray-300 hover:bg-opacity-30"
        {...props}
      >
        <FaQrcode className="text-teal-600 text-lg" />
      </button>
      <button
        className="mt-1 p-3 hover:bg-gray-300 hover:bg-opacity-30"
        {...props}
      >
        <FaTrashAlt className="text-red-500 text-lg" />
      </button>
    </ul>
  );
};

const ExamenAdmin = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error, message } = useSelector(
    (state) => state.testSlice
  );

  const columns = [
    {
      header: "N°",
      accessorFn: (row, i) => i + 1,
      id: "index",
    },
    {
      header: "Fecha",
      accessorKey: "date",
    },
    {
      header: "Nombre completo",
      accessorKey: "name",
    },
    {
      header: "Cédula",
      accessorKey: "cedula",
    },
    {
      header: "Opciones",
      accessorKey: "is_active",
      cell: ({ row }) => (
        <Options
          id={row.original.id}
          onClick={() => handleConfirm(row.original.id, row.original.name)}
        />
      ),
    },
  ];

  useEffect(() => {
    if (error) toast.error(message);
  }, [error]);

  useEffect(() => {
    dispatch(getTestsDataThunk());
    toast.remove();
  }, [dispatch]);

  const handleDelete = (specialty_id, toastId) => {
    toast.dismiss(toastId);
    // dispatch(deleteSpecialtyDataThunk(specialty_id))
    //   .unwrap()
    //   .then(() => {
    //     toast.success("Especialidad eliminado exitosamente");
    //   });
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
    <TableContent data={data} columns={columns} isLoading={isLoading} col={5}>
      <Toaster />
      <h1 className="text-xl font-bold">
        ADMINISTRACIÓN DE EXAMENES REGISTRADOS
      </h1>
      <ButtonTable to="/examenes" />
    </TableContent>
  );
};

export default ExamenAdmin;
