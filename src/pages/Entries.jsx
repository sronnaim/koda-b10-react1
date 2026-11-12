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
    <table>
      <thead>
        <tr>
          <th scope="col" rowSpan={2}>Nama</th>
          <th scope="col" rowSpan={2}>Umur</th>
          <th scope="col" rowSpan={2}>Jenis Kelamin</th>
          <th scope="col" rowSpan={2}>Perokok</th>
          <th scope="colgroup" colSpan={4}>Rokok yang dipakai</th>
        </tr>
        <tr>
          <th scope="col">Gudang Garam Filter</th>
          <th scope="col">Lucky Strike</th>
          <th scope="col">Marlboro</th>
          <th scope="col">Esse</th>
        </tr>
      </thead>
      <tbody>
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
      <Link to={"/"}>Kembali ke formulir</Link>
    </table>
  )
}