import * as Yup from "yup";
export const schema = Yup.object().shape({
  username: Yup.string()
    .min(5, "Minimo de caracteres 5")
    .max(100, "Maximo de caracteres 100")
    .required("El usuario es requerido")
    .trim(),
  password: Yup.string()
    .min(5, "Minimo de caracteres 5")
    .max(100, "Maximo de caracteres 100")
    .required("El password es requerido"),
});

export const user_schema = Yup.object().shape({
  first_name: Yup.string()
    .min(4, "Mínimo de 4 caracteres")
    .max(100, "Maximo de caracteres 100")
    .required("El nombre es obligatorio")
    .trim(),

  last_name: Yup.string()
    .min(4, "Mínimo de 4 caracteres")
    .max(100, "Maximo de caracteres 100")
    .required("Su apellido es obligatorio")
    .trim(),

  cedula: Yup.string()
    .matches(/^\d+$/, "La cédula debe contener solo números")
    .min(6, "Mínimo de 6 dígitos")
    .max(15, "Máximo de 15 dígitos")
    .required("La cédula es obligatoria"),

  email: Yup.string().email("Ingrese un correo electrónico válido"),

  age: Yup.number()
    .nullable()
    .integer("La edad debe ser un numero entero")
    .min(1, "La edad mínima de de 1 año")
    .max(150, "La edad máxima es de 150 años"),

  phone: Yup.string()
    .matches(/^\d+$/, "El teléfono debe contener solo números")
    .min(6, "El teléfono debe tener al menos 6 dígitos")
    .max(15, "El teléfono no puede tener más de 15 dígitos"),

  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/,
      "Debe contener al menos 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial"
    )
    .required("La contraseña es requerida"),

  username: Yup.string()
    .min(5, "5 Minimo de carácteres")
    .max(50, "Máximo 50 carácteres")
    .required("El nombre de usuario es obligatorio")
    .trim(),

  address: Yup.string()
    .min(3, "3 Minimo de carácteres")
    .max(100, "Máximo 50 carácteres"),

  gender: Yup.string().oneOf(["M", "F"], 'El género debe ser "M" o "F"'),

  role: Yup.string().required("El rol es obligatorio").trim(),
});

export const patient_schema = Yup.object().shape({
  first_name: Yup.string()
    .min(4, "Mínimo de 4 caracteres")
    .max(100, "Maximo de caracteres 100")
    .required("El nombre es obligatorio")
    .trim(),

  last_name: Yup.string()
    .min(4, "Mínimo de 4 caracteres")
    .max(100, "Maximo de caracteres 100")
    .required("Su apellido es obligatorio")
    .trim(),

  cedula: Yup.string()
    .matches(/^\d+$/, "La cédula debe contener solo números")
    .min(6, "Mínimo de 6 dígitos")
    .max(15, "Máximo de 15 dígitos")
    .required("La cédula es obligatoria"),

  phone: Yup.string()
    .matches(/^\d+$/, "El teléfono debe contener solo números")
    .min(6, "El teléfono debe tener al menos 6 dígitos")
    .max(15, "El teléfono no puede tener más de 15 dígitos"),

  age: Yup.number()
    .nullable()
    .integer("La edad debe ser un numero entero")
    .min(1, "La edad mínima de de 1 año")
    .max(150, "La edad máxima es de 150 años"),

  address: Yup.string()
    .min(3, "3 Minimo de carácteres")
    .max(100, "Máximo 50 carácteres"),

  gender: Yup.string().oneOf(["M", "F"], 'El género debe ser "M" o "F"'),
});

export const specialty_schema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Mínimo de 4 caracteres")
    .max(100, "Maximo de caracteres 100")
    .required("El nombre es obligatorio"),

  description: Yup.string().min(4, "Mínimo de 4 caracteres"),
});

export const tema_schema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Mínimo de 4 caracteres")
    .max(100, "Maximo de caracteres 100")
    .required("El nombre es obligatorio")
    .trim(),
  description: Yup.string().min(4, "Mínimo de 4 caracteres"),
  specialty: Yup.string().required("La especialidad es obligatoria").trim(),
});
