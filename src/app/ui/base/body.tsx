import { createEndpoint } from "@/app/lib/base/base";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import Editor from '@monaco-editor/react';
import {editor} from 'monaco-editor'

type Props = {
  setEndpoints: Dispatch<SetStateAction<Endpoint[]>>
};

export default function Body({setEndpoints}: Props){
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const [editorLanguage, setEditorLanguage] = useState<string>('plaintext')

    function handleEditorDidMount(editor: editor.IStandaloneCodeEditor) {
        editorRef.current = editor;
    }

    function changeEditorLanguage(event: ChangeEvent<HTMLSelectElement>){
        setEditorLanguage(event.target.value)
    }

    function submit(formData: FormData){
        const endpoint: Endpoint = {
            method: formData.get('method')!.toString(),
            path: formData.get('path')!.toString(),
            responseBody: editorRef.current?.getValue(),
        }
        
        createEndpoint(endpoint).then(res => {
            setEndpoints((endpoints) => [...endpoints, res])
        })
    }

    return(
        <div className="container-fluid">
            <form action={submit} data-bs-theme="dark">
                <div className="input-group mb-5">
                    <div className="col-2">
                        <select name="method" className="form-select">
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="PATCH">PATCH</option>
                            <option value="UPDATE">UPDATE</option>
                            <option value="DELETE">DELETE</option>
                        </select>
                    </div>
                    <span className="input-group-text ms-1" id="basic-addon3">{process.env.NEXT_PUBLIC_BASE_URL}</span>
                    <input name="path" type="text" className="form-control col-auto" defaultValue={'/'} aria-describedby="basic-addon3 basic-addon4"/>
                    <div className="col-2 ms-2">
                        <input type="submit" className="btn btn-primary" value="Save" />
                    </div>
                </div>
                <div className="mb-3 col-10">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        <small className="me-5">expected response body</small>
                        <select onChange={changeEditorLanguage}>
                            <option value="plaintext">plaintext</option>
                            <option value="json">json</option>
                            <option value="xml">xml</option>
                            <option value="html">html</option>
                            <option value="javascript">javascript</option>
                        </select>
                    </label>
                    <Editor
                        height="50vh"
                        defaultLanguage= {editorLanguage}
                        language= {editorLanguage}
                        theme="vs-dark"
                        onMount={handleEditorDidMount}
                    />
                </div>
            </form>
        </div>
    )
}