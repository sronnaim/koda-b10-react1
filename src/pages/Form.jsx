import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { schema as surveySchema } from "../libs/survey"
import { Link, useNavigate } from "react-router"

export default function Form() {
  const { watch, register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(surveySchema),
    mode: "onBlur"
  })

  let navigate = useNavigate();

  const isSmoker = watch("isSmoker")

  function onSubmit(data) {
    const local = JSON.parse(localStorage.getItem("entries")) || []
    local.push(data)
    localStorage.setItem("entries", JSON.stringify(local))
    navigate("/entries")
    reset()
  }

  return (
    <main className="container max-w-160 my-4 m-auto">
      <article className="form flex flex-col gap-3">
        <header className="relative overflow-hidden rounded-lg bg-[white] border-neutral-300 border-[1px] *:px-8 py-4">
          <div className="bg-indigo-600 absolute inset-0 h-2"></div>
          <h1 className="text-3xl mb-3">Survey Perokok</h1>
          <p className="pt-3 border-t-[1px] border-neutral-300">Form survey pendataan perokok</p>
        </header>
        <form onSubmitCapture={handleSubmit(onSubmit)}
          className="[&>:not(:last-child)]:border-[1px] *:border-neutral-300 [&>:not(:last-child)]:p-8 [&>:not(:last-child)]:rounded-lg flex flex-col gap-3 [&>:not(:last-child)]:bg-[white] [&>:not(:last-child)]:flex [&>:not(:last-child)]:flex-col [&>:not(:last-child)]:gap-4 [&_input]:outline-none [&_input]:border-b-[1px] [&_input]:border-neutral-300 [&_input]:bg-[transparent]">
          <div>
            <label htmlFor="name">Siapa nama Anda?</label>
            <div>
              <input {...register("name")} className="min-w-[30ch]" type="text" id="name" autoComplete="name" placeholder="Nama lengkap..." />
            </div>
            {errors?.name?.message && <strong>{errors.name.message}</strong>}
          </div>

          <div>
            <label htmlFor="age">Berapa umur Anda?</label>
            <div>
              <input {...register("age")} placeholder="Umur..." className="min-w-[30ch]" type="number" id="age" />
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
          <div className="button-group flex justify-between [&>:first-child]:bg-indigo-600 [&>:first-child]:text-[white] last:*:text-indigo-600 *:font-medium *:rounded *:px-8 *:py-2">
            <button type="submit">Kirim form</button>
            <button type="reset" onClick={() => reset()}>Reset</button>
          </div>
        </form >
        <Link to={"/entries"} className="text-indigo-600 underline" >Lihat entri yang terkirim</Link>
      </article>
    </main>
  )
}