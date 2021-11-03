import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form, Button, Table} from "react-bootstrap";
import {useState, useEffect} from "react";
import Axios  from "axios";

function App() {

  const [barcode_add, set_barcode_add] = useState(0);
  const [description_add, set_description_add] = useState("");
  const [unit_cost_add, set_unit_cost_add] = useState(0);
  const [state_add, set_state_add] = useState("true");

  const [products, set_products] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/v1/product/list").then((res) =>{
      console.log(res.data.products)
      set_products(res.data.products)
    });
  }, [])

  const add_product_db =() =>{
    console.log(barcode_add+description_add+unit_cost_add+state_add)
    Axios.post("http://localhost:3001/api/v1/product/add",{
      barcode: barcode_add,
      description: description_add,
      unit_cost: unit_cost_add,
      state: state_add
    });
  }

  const delete_product = (_id) => {
    Axios.delete("http://localhost:3001/api/v1/product/delete/" + _id)
  }

  


  return (
    <div className="App">
      <Container>
        <h1>
          CRUD - PRODUCTOS
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicBarcode">
            <Form.Label>Codigo de barras</Form.Label>
            <Form.Control type="number" placeholder="Ingrese codigo de barras" onChange ={(e) => {
              set_barcode_add(e.target.value);
            }
            } />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="texto" placeholder="Ingrese el nombre del producto" onChange ={(e) => {
              set_description_add(e.target.value);
            }
            } />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUnitcost">
            <Form.Label>Costo por unidad</Form.Label>
            <Form.Control type="number" placeholder="Ingrese costo por unidad" onChange ={(e) => {
              set_unit_cost_add(e.target.value);
            }
            } />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUnitcost">
            <Form.Check 
            inline
            label = "Disponible"
            name = "estado"
            type = "radio"
            id = "1" onChange ={(e) => {
              set_state_add("true");
            }
            }/>

            <Form.Check 
            inline
            label = "Agotado"
            name = "estado"
            type = "radio"
            id = "0"
            onChange ={(e) => {
              set_state_add("false");
            }
            }/>
          </Form.Group>


         
          <Button variant="primary" onClick ={add_product_db}>
            AÑADIR
          </Button>
        </Form>

        <hr/>

        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Codigo de barras</th>
      <th>Descripcion</th>
      <th>Costo por Unidad</th>
      <th>Estado</th>
      <th>Actualizar</th>
      <th>Eliminar</th>
    </tr>
  </thead>
  <tbody>
    {
      products.map((value, key) =>
        <tr>
          <td>
            {key}
          </td>
          <td>
            {value.barcode}
          </td>
          <td>
            {value.description}
          </td>
          <td>
            {value.unit_cost}
          </td>
          <td>
            {value.state.toString()}
          </td>
          <td>
            <Button variant = "warning">ACTUALIZAR</Button>
          </td>
          <td>
            <Button variant = "danger" onclick ={() => delete_product(value._id)}>ELIMINAR</Button>
          </td>
        </tr>
      )
    }
  </tbody>
</Table>


      </Container>
      
    </div>
  );
}

export default App;
