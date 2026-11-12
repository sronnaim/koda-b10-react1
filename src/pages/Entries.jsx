import { useSyncExternalStore } from "react"
import { Link } from "react-router"

function sub(notify) {
  window.addEventListener("storage", notify)
  return () => window.removeEventListener('storage', notify)
}

function getRawEntries() {
  return localStorage.getItem("entries")
}

export default function Entries() {
  const rawEntries = useSyncExternalStore(sub, getRawEntries, () => null)
  const entries = JSON.parse(rawEntries)

  return (
    <main className="container container max-w-2xl py-2 px-4 m-auto">
      <article>
        <h1 className="text-3xl relative overflow-hidden rounded-lg bg-[white] border-neutral-300 border-[1px] px-8 py-4">
          <div className="bg-indigo-600 absolute inset-0 h-2"></div>
          Data Form Survey Perokok
        </h1>
        <div className="border-[1px] border-neutral-300 rounded-lg overflow-hidden bg-[white] mt-3">
          <table className="[&_td]:p-2 [&_th]:p-2 [&_tr>*]:text-center [&_tr>*]:text-sm table-auto">
            <thead class="bg-indigo-600 text-[white] [&_th:not(:first-child)]:border-s-[1px] [&_th:not(:last-child)]:border-e-[1px]">
              <tr>
                <th scope="col" rowSpan={2}>Nama</th>
                <th scope="col" rowSpan={2}>Umur</th>
                <th scope="col" rowSpan={2}>Jenis Kelamin</th>
                <th scope="col" rowSpan={2}>Perokok</th>
                <th scope="colgroup" colSpan={4}>Rokok yang dipakai</th>
              </tr>
              <tr class="*:border-t-[1px]">
                <th scope="col">Gudang Garam Filter</th>
                <th scope="col">Lucky Strike</th>
                <th scope="col">Marlboro</th>
                <th scope="col">Esse</th>
              </tr>
            </thead>
            <tbody
              class="[&>*:nth-child(even)]:bg-indigo-100 [&_tr>*:not(:first-child)]:border-s-[1px] [&_tr>*]:border-[rgba(0,0,0,0.2)]">
              {entries && entries.length >= 1 && entries.map(e => <tr>
                <th scope="row">{e.name}</th>
                <td>{e.age}</td>
                <td>{e.sex === "m" ? "Laki-laki" : "Perempuan"}</td>
                <td>{e.isSmoker ? "Ya" : "Tidak"}</td>
                <td>{e.cigars.includes(1) ? "✅" : ""}</td>
                <td>{e.cigars.includes(2) ? "✅" : ""}</td>
                <td>{e.cigars.includes(3) ? "✅" : ""}</td>
                <td>{e.cigars.includes(4) ? "✅" : ""}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
        <footer>
          <Link to={"/"} className="font-medium text-indigo-600 underline">Kembali ke formulir</Link>
        </footer>
      </article>
    </main>
  )
}