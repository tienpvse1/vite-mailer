import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import EmailEditor from "react-email-editor";
import { useRef } from "react";
import axios from "axios";
function App() {
  const emailEditorRef = useRef<EmailEditor>(null);

  const exportHtml = () => {
    //@ts-ignore
    emailEditorRef.current.editor.exportHtml(async (data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
      const {} = axios.post("http://localhost:8080/api/v1/mailer/send", {
        to: "kienvtse140616@fpt.edu.vn",
        value: html,
      });
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  };

  const onReady = () => {
    // editor is ready
    console.log("onReady");
  };

  return (
    <div>
      <div>
        <button onClick={exportHtml}>Export HTML</button>
      </div>
      <EmailEditor ref={emailEditorRef} onLoad={onLoad} />
    </div>
  );
}

export default App;
