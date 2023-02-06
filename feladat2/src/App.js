import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div> 
          <h2>Az antikvárium története</h2>
          <p>Az antikváriumot 1901-ben alapították, még az Osztrák–Magyar Monarchia idején. Magát az épületet többször újjá kellet építeni, ez azonban lehetőséget adott a megújításra, korszerűsítésre.</p>
          <p>A jelenlegi épület 2019-ben lett felújítva.</p>
          <h2>Hírességek, akik itt jártak</h2>
          <div className="row">
      <div className="card col-sm m-2">
          <h3 className="card-title">Ady Endre</h3>
          <p className="card-text">Többször is kikölcsönözte Deák Ferenc műveit</p>
          <a href="https://hu.wikipedia.org/wiki/Ady_Endre">Wikipédia</a>
      </div>

      <div className="card col-sm m-2">
          <h3 className="card-title">Móra Ferenc</h3>
          <p className="card-text">Az Én Újságom c. gyermeklapba írt művei közül 50-nek a kéziratát az antikváriumnak adományozta</p>
          <a href="https://hu.wikipedia.org/wiki/Móra_Ferenc">Wikipédia</a>
      </div>

      <div className="card col-sm m-2">
          <h3 className="card-title">Névtelen adományozó</h3>
          <p className="card-text">1992-ben 500 000 Ft-tal támogatta az antikvárium működését</p>
      </div>
      </div>
      
      <h2>Új híresség jelzése</h2>
      <form >
        
          <div className='form-group'>
              <label for="url">Wikipédia link</label>
              <input  type="url" name="url" className='form-control m2'/>
          </div>

          <div className='form-gorup'>
              <label Htmlfor="text1">Leírás</label>
              <textarea className='form-control m-2' name="Leírás" id="text" cols="120" rows="3"></textarea>
          </div>

        <button className='btn btn-primary m-2'type="submit">Elküld</button>

      </form>
      
      
    </div>

  );
}

export default App;
