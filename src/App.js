import 'bootstrap/dist/css/bootstrap.min.css'
import {Form,Button} from'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
  <form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="sfax mahares"/>
  </div>
  
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>Bizerte</option>
        <option>Tunis</option>
        <option>Gafsa</option>
        <option>Gassrine</option>
        <option>Sousse</option>
        <option>Monastir</option>
        <option>Mahdia</option>
        <option>Nabel</option>
        <option>El Kaf</option>
        <option>Tataouine</option>
        <option>Jandouba</option>
        <option>Selina</option>
        <option>Sfax</option>
        <option>Kairouan</option>
        <option>Sidi Bouzid</option>
        <option>Tozeur</option>
        <option>Zaghouan</option>
        <option>Manouba</option>
        <option>Medenine</option>
        <option>Beja</option>
        <option>Ben Arous</option>
        <option>Kebili</option>
        <option>Gabes</option>
        <option>Ariana</option>

      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip"/>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
      
    </div>
  );
}

export default App