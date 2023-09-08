import './App.css';
import {AdminContext, Form, TextInput} from "react-admin";

function App() {
    return (
        <div className="App">
            <AdminContext>
                <Form>
                    <TextInput name={"name"} source={"source"} disabled={false} ></TextInput>
                </Form>
            </AdminContext>
        </div>
    );
}

export default App;
