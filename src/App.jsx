export default function App() {
  return (
    <>
      <h1>Survey Perkokok</h1>
      <p>Form survey untuk pendataan perokok</p>
      <form action="/">
        <div>
          <label htmlFor="name">Siapa nama Anda?</label>
          <div>
            <input type="text" autoComplete="name" name="name" id="name" />
          </div>
        </div>

        <div>
          <label htmlFor="age">Berapa umur Anda?</label>
          <div>
            <input type="number" name="age" id="age" />
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="smoker-n">Apa Anda perokok?</label>
          </div>
          <div>
            <input type="radio" name="smoker" id="smoker-y" value={true} />
            <label htmlFor="smoker-y">Ya</label>
          </div>

          <div>
            <input type="radio" name="smoker" id="smoker-n" value={false} />
            <label htmlFor="smoker-n">Tidak</label>
          </div>
        </div>

        <div>
          <label htmlFor="cig-1">Jika Anda perokok, rokok apa yang pernah Anda coba?</label>

          <div>
            <input type="checkbox" name="cig" id="cig-1" value={"cig1"} />
            <label htmlFor="cig-1">Gudang Garam Filter</label>
          </div>
          <div>
            <input type="checkbox" name="cig" id="cig-2" value={"cig2"} />
            <label htmlFor="cig-2">Lucky Strike</label>
          </div>
          <div>
            <input type="checkbox" name="cig" id="cig-3" value={"cig3"} />
            <label htmlFor="cig-3">Marlboro</label>
          </div>
          <div>
            <input type="checkbox" name="cig" id="cig-4" value={"cig4"} />
            <label htmlFor="cig-4">Esse</label>
          </div>
        </div>
        <div>
          <button type="submit">Kirim form</button>
          <button type="reset">Reset</button>
        </div>
      </form >
    </>
  )
}