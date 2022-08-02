import './code-editor.css';
import MonacoEditor, { Monaco } from "@monaco-editor/react";
import { useRef } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const CodeEditor = ({ onChange, initialValue }: CodeEditorProps) => {
    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>();



    const onEditorDidMount = (
        editor: monaco.editor.IStandaloneCodeEditor,
        _monaco: Monaco
    ) => {
        editorRef.current = editor;
        editor.onDidChangeModelContent(() => onChange(editor.getValue()));
        editor.getModel()?.updateOptions({ tabSize: 2 });
    };

    const onFormatClick = () => {
        if (editorRef.current) {
            const unformatted = editorRef.current.getValue()

            const formatted = prettier.format(unformatted, {
                parser: 'babel',
                plugins: [parser],
                useTabs: false,
                semi: true,
                singleQuote: true

            }).replace(/\n$/, '')

            editorRef.current?.setValue(formatted)
        }
    }

    return (
        <div className='editor-wrapper'>
            <button className="button button-format is-primary is-small" onClick={onFormatClick}>Format</button>
            <MonacoEditor
                onMount={onEditorDidMount}
                value={initialValue}
                theme='vs-dark'
                language='javascript'
                height='500px'
                options={{
                    wordWrap: "on",
                    minimap: { enabled: false },
                    showUnused: false,
                    folding: false,
                    lineNumbersMinChars: 3,
                    fontSize: 16,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                }}
            />
        </div>
    );
};

export default CodeEditor;