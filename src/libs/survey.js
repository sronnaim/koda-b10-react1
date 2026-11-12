import { array, boolean, number, object, string } from "yup"

export const schema = object({
  name: string().ensure().required("Masukkan nama Anda"),
  age: number().typeError("Masukan umur Anda").min(6, "Minimal responden berumur 6 untuk survey ini").max(103, "Maximal responden berumur 6 untuk survey ini").required("Masukkan umur anda"),
  sex: string().lowercase().matches(/(m|f)/).required("Pilih jenis kelamin Anda"),
  isSmoker: boolean().required("Pilih apakah Anda perokok atau tidak"),
  cigars: array().of(number().min(1).max(4)).max(4).optional()
})
