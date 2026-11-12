import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { schema as surveySchema } from "../libs/survey"

export default function Form() {
  const { watch, register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(surveySchema),
    mode: "onBlur"
  })

  const isSmoker = watch("isSmoker")

  function onSubmit(data) {
    const local = JSON.parse(localStorage.getItem("entries")) || []
    local.push(data)
    localStorage.setItem("entries", JSON.stringify(local))
  }

  return (
    <main className="container max-w-160 m-auto">
      <h1 className="">Survey Perkokok</h1>
      <p>Form survey untuk pendataan perokok</p>
      <form onSubmitCapture={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Siapa nama Anda?</label>
          <div>
            <input {...register("name")} type="text" id="name" autoComplete="name" />
          </div>
          {errors?.name?.message && <strong>{errors.name.message}</strong>}
        </div>

        <div>
          <label htmlFor="age">Berapa umur Anda?</label>
          <div>
            <input {...register("age")} type="number" id="age" />
          </div>
          {errors.age && <strong>{errors.age.message}</strong>}
        </div>

        <div>
          <div>
            <label htmlFor="sex-m">Apa jenis kelamin Anda?</label>
          </div>
          <div>
            <input {...register("sex")} value={"m"} type="radio" id="sex-m" />
            <label htmlFor="sex-m">Laki-laki</label>
          </div>

          <div>
            <input {...register("sex")} value={"f"} type="radio" id="sex-f" />
            <label htmlFor="sex-f">Perempuan</label>
          </div>
          {errors.sex && <strong>{errors.sex.message}</strong>}
        </div>

        <div>
          <div>
            <label htmlFor="smoker-n">Apa Anda perokok?</label>
          </div>
          <div>
            <input {...register("isSmoker")} value={true} type="radio" id="smoker-y" />
            <label htmlFor="smoker-y">Ya</label>
          </div>

          <div>
            <input {...register("isSmoker")} value={false} type="radio" id="smoker-n" />
            <label htmlFor="smoker-n">Tidak</label>
          </div>
          {errors.isSmoker && <strong>{errors.isSmoker.message}</strong>}
        </div>

        {isSmoker === "true" && <div>
          <label htmlFor="cig-1">Jika Anda perokok, rokok apa yang pernah Anda coba?</label>

          <div>
            <input {...register("cigars")} type="checkbox" value={1} id="cig-1" />
            <label htmlFor="cig-1">Gudang Garam Filter</label>
          </div>
          <div>
            <input {...register("cigars")} type="checkbox" value={2} id="cig-2" />
            <label htmlFor="cig-2">Lucky Strike</label>
          </div>
          <div>
            <input {...register("cigars")} type="checkbox" value={3} id="cig-3" />
            <label htmlFor="cig-3">Marlboro</label>
          </div>
          <div>
            <input {...register("cigars")} type="checkbox" value={4} id="cig-4" />
            <label htmlFor="cig-4">Esse</label>
          </div>
          {/* {errors.cigars && <strong>{errors.cigars.message}</strong>} */}
        </div>}
        <div>
          <button type="submit">Kirim form</button>
          <button type="reset">Reset</button>
        </div>
      </form >
    </main>
  )
}