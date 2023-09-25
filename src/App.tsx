import './App.css';
import {AdminContext, Form, ResourceContextProvider, TextInput} from "react-admin";

function App() {
    return (
        <div className="App">
            <AdminContext>
                <ResourceContextProvider value="posts">
                    <Form>
                        <TextInput name={"name"} source={"source"} disabled={false}></TextInput>
                    </Form>
                </ResourceContextProvider>
            </AdminContext>
        </div>
    );
}

export default App;
